import styled from 'styled-components'

export const ApproveContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.25rem;
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

  h1 {
    font-size: 1.25rem;
  }
`
