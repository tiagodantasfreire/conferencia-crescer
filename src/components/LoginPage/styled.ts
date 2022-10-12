import styled, { css } from 'styled-components'
import { lighten } from 'polished'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  input {
    width: 15.625rem;
    padding: 0.55rem;
    border-radius: 4px;
    border: 1px solid #000;
    color: #000;
    font-weight: bold;
    transition: border 0.2s;

    &:focus {
      border: 1px solid ${({ theme }) => theme.pink};
    }

    &::placeholder {
      color: rgba(0, 0, 0, 0.8);
    }
  }

  button {
    width: 15.625rem;
    background-color: ${({ theme }) => theme.pink};
    color: ${({ theme }) => theme.white};
    text-transform: uppercase;
    border-radius: 4px;
    padding: 0.5rem;
    border: none;
    font-weight: bold;
    cursor: pointer;

    ${({ theme }) => css`
      &:hover {
        background-color: ${lighten(0.1, theme.pink)};
      }
    `}
  }

  .wrong {
    color: #dc2626;
  }
`
