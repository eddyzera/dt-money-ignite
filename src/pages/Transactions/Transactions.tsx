import React, { useContext } from 'react'
import { Header, SearchForm, Summary } from '../../components'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { PriceHighLight, TransactionsContainer, TransactionTable } from './styles'

export const Transactions: React.FunctionComponent = () => {

  const { transactions } = useContext(TransactionsContext)

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