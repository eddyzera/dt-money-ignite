import React, { createContext, PropsWithChildren, useEffect, useState } from 'react'

interface Transaction {
  id: number,
  description: string,
  type: 'income' | 'outcome',
  price: number,
  category: string,
  createdAt: string
}

interface TransactionContextType {
  transactions: Array<Transaction>
}

export const TransactionsContext = createContext({} as TransactionContextType)

export const TransactionsProvider: React.FunctionComponent<PropsWithChildren> = ({ children }) => {

  const [transactions, setTransactions] = useState<Transaction[]>([])

  const loadTransactions = async () => {
    const response = await fetch('http://localhost:3333/transactions')
    const data = await response.json()

    setTransactions(data)
  }

  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}