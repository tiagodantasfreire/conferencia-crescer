import styled from 'styled-components';

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;

  h1 {
    display: flex;
    gap: 0.5rem;
  }

  .names {
    font-weight: bold;
    text-transform: uppercase;
  }

  .phone {
    font-weight: bold;
  }
`;
