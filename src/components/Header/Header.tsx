import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import logImg from '../../assets/logo.svg'
import { HeaderContainer, HeaderContent, NewTransacionButton } from './styles'
import { NewTransactionsModal } from '../NewTransactionsModal/NewTransactionsModal'

export const Header: React.FunctionComponent = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logImg} alt="DT money" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransacionButton>Nova transação</NewTransacionButton>
          </Dialog.Trigger>
          <NewTransactionsModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
