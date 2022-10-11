import styled, { css } from 'styled-components'
import { lighten } from 'polished'

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 3rem;

  h1 {
    font-size: 1.25rem;
  }

  p {
    font-size: 0.875rem;
  }

  > button {
    background: none;
    border: none;
    font-size: 1rem;
    margin-top: 0.5rem;
    color: ${({ theme }) => theme.pink};
    text-decoration: underline;
    font-family: inherit;

    &:hover {
      cursor: pointer;
    }
  }

  img {
    border: 1px solid ${({ theme }) => theme.pink};
    border-radius: 8px;
    margin: 1rem 0;
  }

  input[type='checkbox'] {
    accent-color: ${({ theme }) => theme.pink};
  }

  input[type='text'] {
    width: 80%;
    padding: 0.75rem;
    border-radius: 4px;
    border: 1px solid #000;
    color: #000;
    font-weight: bold;
    transition: border 0.2s;
    margin-bottom: 1.25rem;

    &:focus {
      border: 1px solid ${({ theme }) => theme.pink};
    }

    &::placeholder {
      color: rgba(0, 0, 0, 0.8);
    }
  }
`

export const ConfirmationPayment = styled.form`
  h2 {
    font-size: 1rem;
  }

  button {
    width: 90vw;
    max-width: 25rem;
    background-color: ${({ theme }) => theme.pink};
    color: ${({ theme }) => theme.white};
    text-transform: uppercase;
    border-radius: 8px;
    margin-top: 0.5rem;
    padding: 1rem;
    border: none;
    font-weight: bold;
    font-family: 'Hind', sans-serif;
    cursor: pointer;
    margin-bottom: 2rem;

    ${({ theme }) => css`
      &:hover {
        background-color: ${lighten(0.1, theme.pink)};
      }
    `}
  }
`
