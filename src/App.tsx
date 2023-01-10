import React from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'

export const App: React.FunctionComponent = () => {
 return (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <h1>Hello World</h1>
  </ThemeProvider>
 )
}
