import React from 'react'
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'
import { SummaryCard, SummrayContainer } from './styles'

export const Summary: React.FunctionComponent = () => {
  return (
    <SummrayContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>R$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>R$ 1.259,00</strong>
      </SummaryCard>

      <SummaryCard variant='green'>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        <strong>R$ 1.259,00</strong>
      </SummaryCard>
    </SummrayContainer>
  )
}