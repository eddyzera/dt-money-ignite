import React from 'react'
import logImg from '../../assets/logo.svg'
import { HeaderContainer, HeaderContent, NewTransacionButton } from './styles'


export const Header: React.FunctionComponent = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logImg} alt="DT money" />
        <NewTransacionButton>new transaction</NewTransacionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}