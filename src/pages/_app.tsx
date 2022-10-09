import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../styles/themes/default';

import { GlobalStyle } from '../styles/global';
import '../styles/global.css';
import { Header } from '../components/Header';
import { FormContextProvider } from '../context/FormContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <FormContextProvider>
        <Header />
        <Component {...pageProps} />
      </FormContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
