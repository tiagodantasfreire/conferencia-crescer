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
    font-family: 'Hind';
    -webkit-font-smoothing: antialiased;
  }

  input {
    font-family: 'Hind';
  }

  a {
    color: #000;
    text-decoration: none;
  }
`

export const Container = styled.div`
  max-width: 90vw;
  margin: 0 auto;

  ${media.greaterThan('medium')`
      max-width: 750px
  `}

  h1 {
    font-size: 1.5rem;
  }
`
