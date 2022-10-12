import styled, { createGlobalStyle } from 'styled-components'
import media from 'styled-media-query'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    :focus {
      outline: none;
    }
  }

  body {
    color: #000;
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  input, button {
    font-family: 'Poppins', sans-serif;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 500;
  }
`

export const Container = styled.div`
  max-width: 90vw;
  margin: 0 auto;

  ${media.greaterThan('medium')`
      max-width: 750px
  `}
`
