import React from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { Transactions } from './pages'

export const App: React.FunctionComponent = () => {
 return (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
   <Transactions />
  </ThemeProvider>
 )
}
