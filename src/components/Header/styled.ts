import styled from 'styled-components'

interface HeaderContainerType {
  step: string
}

export const HeaderContainer = styled.header<HeaderContainerType>`
  display: ${({ step }) => (step === 'success' ? 'none' : 'flex')};
  flex-direction: column;
  gap: 1rem;

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.7rem 0;

    font-size: 1rem;
    font-weight: bold;
    font-family: 'Hind', 'Inter', sans-serif;

    background: rgb(238, 11, 82);
    background: -moz-linear-gradient(
      90deg,
      rgba(238, 11, 82, 1) 15%,
      rgba(255, 255, 255, 1) 75%,
      rgba(232, 232, 232, 1) 80%
    );
    background: -webkit-linear-gradient(
      90deg,
      rgba(238, 11, 82, 1) 15%,
      rgba(255, 255, 255, 1) 75%,
      rgba(232, 232, 232, 1) 80%
    );
    background: linear-gradient(
      90deg,
      rgba(238, 11, 82, 1) 15%,
      rgba(255, 255, 255, 1) 75%,
      rgba(232, 232, 232, 1) 80%
    );
  }

  p {
    display: none;
  }
`
