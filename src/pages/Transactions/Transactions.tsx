import React from 'react'
import { Header, Summary } from '../../components'
import { PriceHighLight, TransactionsContainer, TransactionTable } from './styles'

export const Transactions: React.FunctionComponent = () => {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <TransactionTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighLight variant='income'>
                  R$ 12.000,00
                </PriceHighLight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Hamburguer</td>
              <td>
                <PriceHighLight variant='outcome'>
                  - R$ 59,00
                </PriceHighLight>
              </td>
              <td>Alimentação</td>
              <td>10/04/2022</td>
            </tr>
          </tbody>
        </TransactionTable>
      </TransactionsContainer>
    </div>
  )
}