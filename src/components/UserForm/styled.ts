import styled, { css } from 'styled-components'
import { lighten } from 'polished'

export const FormContainer = styled.div`
  max-width: 90vw;
  margin: 2rem 0 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;

  h1 {
    font-size: 1.25rem;
  }

  .limit {
    color: red;
    font-size: 0.875rem;
    margin-top: 1rem;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  input {
    width: inherit;
    padding: 0.75rem;
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

    ${({ theme }) => css`
      &:hover {
        background-color: ${lighten(0.1, theme.pink)};
      }
    `}
  }
`

export const AddRemoveContainer = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 0.875rem;
    cursor: pointer;

    &.remove {
      color: red;
    }
  }
`

export const RadioContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  div {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;

    input {
      accent-color: ${({ theme }) => theme.pink};
    }
  }
`

export const NameInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
