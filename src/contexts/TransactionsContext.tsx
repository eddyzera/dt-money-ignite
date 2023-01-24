import React, { createContext, PropsWithChildren, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface Transaction {
  id: number,
  description: string,
  type: 'income' | 'outcome',
  price: number,
  category: string,
  createdAt: string
}

interface CreateTransactionInput {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

interface TransactionContextType {
  transactions: Array<Transaction>
  fetchTransactions: (query?: string) => Promise<void>
  createTransactions: (data: CreateTransactionInput) => Promise<void>
}


export const TransactionsContext = createContext({} as TransactionContextType)

export const TransactionsProvider: React.FunctionComponent<PropsWithChildren> = ({ children }) => {

  const [transactions, setTransactions] = useState<Transaction[]>([])

  const createTransactions = async(data: CreateTransactionInput) => {
    const { description, price, category, type } = data

    const response = await api.post('/transactions', {
      description,
      price,
      category,
      type,
      createdAt: new Date(),
    })

    setTransactions(state => [ response.data, ...state ])
  }

  const fetchTransactions = async (query?: string) => {
    const response = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query
      }
    })

    setTransactions(response.data)
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider 
      value={{
        transactions,
        fetchTransactions,
        createTransactions
      }}>
      {children}
    </TransactionsContext.Provider>
  )
}