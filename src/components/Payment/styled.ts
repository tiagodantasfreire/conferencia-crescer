import styled, { css } from 'styled-components'
import { lighten } from 'polished'

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    cursor: pointer;
    font-size: 0.875rem;
    margin-bottom: 0.75rem;
  }

  h1 {
    font-size: 1.25rem;
  }

  > div {
    font-size: 0.875rem;
    margin-top: 0.75rem;

    span {
      font-weight: 600;
      display: inline;
    }
  }

  p {
    font-size: 0.875rem;
  }

  img {
    border: 1px solid ${({ theme }) => theme.pink};
    border-radius: 8px;
    margin: 0.5rem auto 1rem;
    width: 85%;
    height: auto;
  }

  input[type='file'] {
    margin-bottom: 0.5rem;
  }

  input[type='checkbox'] {
    accent-color: ${({ theme }) => theme.pink};
  }

  input[type='text'] {
    width: 100%;
    padding: 0.75rem;
    border-radius: 4px;
    border: 1px solid #000;
    color: #000;
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

export const HowTo = styled.p`
  background-color: #d1d5db;
  color: #000;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  line-height: 1.5rem;
  font-weight: 300;
  text-align: justify;
`

interface CopyButtonType {
  copied: boolean
}

export const CopyButton = styled.button<CopyButtonType>`
  background: none;
  border: none;
  font-size: 1rem;
  color: ${({ theme, copied }) => (copied ? theme.black : theme.pink)};
  border: 1px solid
    ${({ theme, copied }) => (copied ? theme.black : theme.pink)};
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-family: inherit;
  margin: 0.5rem auto 1rem;

  &:hover {
    cursor: pointer;
  }
`

export const ConfirmationPayment = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  h2 {
    font-size: 1.15rem;
    font-weight: 500;
    margin: 0.75rem 0;
  }

  button {
    margin: 1rem 0;
    width: 100%;
    background-color: ${({ theme }) => theme.pink};
    color: ${({ theme }) => theme.white};
    border-radius: 48px;
    padding: 0.875rem;
    border: none;
    cursor: pointer;

    ${({ theme }) => css`
      &:hover {
        background-color: ${lighten(0.1, theme.pink)};
      }
    `}

    &:disabled {
      background-color: #d1d5db;
      color: #444;
    }
  }
`
