import styled from 'styled-components'

export const UsersContainer = styled.div`
  margin-top: 1.25rem;
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;

  h1 {
    font-size: 1.25rem;
  }

  > p {
    font-size: 0.85rem;
    margin-bottom: 0.25rem;
  }

  a {
    font-size: 0.875rem;
    text-decoration: underline;
    color: ${({ theme }) => theme.pink};
    cursor: pointer;
  }
`

export const SearchBarContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 0.75rem;
  position: relative;
  border-radius: 4px;
  padding: 0.5rem;
  font-size: 0.75rem;
  border: 1px solid black;
  margin: 1rem 0;

  input {
    width: inherit;
    background-color: transparent;
    border: none;
  }
`

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #afacac;
  padding: 0.5rem 0;

  > p {
    font-size: 0.85rem;
    line-height: 1.15rem;

    a {
      text-decoration: underline;
      cursor: pointer;
      color: ${({ theme }) => theme.pink};
    }
  }
`

export const ConfirmButton = styled.button`
  width: fit-content;
  margin-top: 0.5rem;
  border: none;
  border-radius: 4px;
  padding: 0.35rem 1rem;
  background-color: green;
  color: #fff;
  text-transform: uppercase;
  font-size: 0.625rem;
`
