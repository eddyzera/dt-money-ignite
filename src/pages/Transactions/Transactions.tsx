import React, { useEffect, useState } from 'react'
import { Header, SearchForm, Summary } from '../../components'
import { PriceHighLight, TransactionsContainer, TransactionTable } from './styles'

interface Transaction {
  id: number,
  description: string,
  type: 'income' | 'outcome',
  price: number,
  category: string,
  createdAt: string
}

export const Transactions: React.FunctionComponent = () => {

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
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            {transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighLight variant={transaction.type}>
                      {transaction.price}
                    </PriceHighLight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>13/04/2022</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionTable>
      </TransactionsContainer>
    </div>
  )
}