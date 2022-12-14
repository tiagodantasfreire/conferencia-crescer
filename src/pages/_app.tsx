import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../styles/themes/default'

import { GlobalStyle } from '../styles/global'
import '../styles/global.css'
import { Header } from '../components/Header'
import { FormContextProvider } from '../context/FormContext'
import { ParticipantsContextProvider } from '../context/ParticipantsContext'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <FormContextProvider>
        <ParticipantsContextProvider>
          <Header />
          <Component {...pageProps} />
          <Toaster />
        </ParticipantsContextProvider>
      </FormContextProvider>
    </ThemeProvider>
  )
}

export default MyApp
