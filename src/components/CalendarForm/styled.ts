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
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  button {
    background-color: ${({ theme }) => theme.pink};
    color: ${({ theme }) => theme.white};
    text-transform: uppercase;
    border-radius: 8px;
    margin-top: 1rem;
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

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  > div {
    display: flex;
    justify-content: center;
    align-items: baseline;
    gap: 0.5rem;
  }

  input {
    accent-color: ${({ theme }) => theme.pink};
  }
`
