import styled from 'styled-components'

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    margin: 0 auto;
    width: 90%;
    height: fit-content;

    background-color: #fff;
    border-radius: 24px;

    padding: 2.5rem 1.5rem;

    svg {
      animation-name: loading;
      animation-duration: 1s;
      animation-iteration-count: infinite;
    }

    h1 {
      font-size: 1rem;
      margin-top: 1rem;
      margin-bottom: 0.25rem;
      color: #111827;
      font-weight: bold;
    }

    p {
      font-size: 0.875rem;
      color: #374151;
    }
  }

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
