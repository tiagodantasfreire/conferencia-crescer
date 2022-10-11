import styled from 'styled-components'

export const ApproveContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.25rem;
  }

  a {
    font-size: 0.75rem;
    text-decoration: underline;
    color: ${({ theme }) => theme.pink};
    cursor: pointer;
  }

  > p {
    margin-top: 1rem;
    font-size: 0.875rem;
  }
`
