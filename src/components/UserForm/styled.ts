import styled, { css } from 'styled-components'
import { lighten } from 'polished'

export const FormContainer = styled.div`
  max-width: 90vw;
  margin: 1rem 0 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  h1 {
    font-size: 1.25rem;
    font-weight: 500;
  }

  .limit {
    color: red;
    font-size: 0.75rem;
    margin-top: 1rem;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  input {
    width: inherit;
    padding: 0.75rem;
    border-radius: 8px;
    border: 1px solid #000;
    color: #000;
    transition: border 0.2s;

    &:focus {
      border: 1px solid ${({ theme }) => theme.pink};
    }

    &::placeholder {
      color: rgba(0, 0, 0, 0.8);
    }
  }

  .invalid {
    color: ${({ theme }) => theme.error};
    font-size: 0.75rem;
    margin-top: -0.5rem;
  }
`

export const RadioContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    label {
      font-size: 0.875rem;
    }

    input {
      accent-color: ${({ theme }) => theme.pink};
    }
  }
`
interface NameInputContainerType {
  isValid: boolean
}

export const NameInputContainer = styled.div<NameInputContainerType>`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  input {
    border-color: ${({ isValid, theme }) => (isValid ? '#000' : theme.error)};
  }

  span {
    color: ${({ theme }) => theme.error};
    font-size: 0.75rem;
    margin-top: -0.5rem;
  }
`

export const AddRemoveContainer = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 0.75rem;
    cursor: pointer;

    &.remove {
      color: red;
    }
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  gap: 0.5rem;
  bottom: 1rem;
  width: 90%;
  z-index: 10;
  max-width: 46.875rem;

  span {
    font-size: 0.875rem;
    color: #1f2937;
    background-color: #fff;
  }

  button {
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
  }
`
