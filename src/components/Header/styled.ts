import styled from 'styled-components'

interface HeaderContainerType {
  step: string
}

export const HeaderContainer = styled.header<HeaderContainerType>`
  display: ${({ step }) => (step === 'success' ? 'none' : 'flex')};
  flex-direction: column;
  padding: 0.7rem 0;

  background: rgb(238, 11, 82);
  background: -moz-linear-gradient(
    90deg,
    rgba(238, 11, 82, 1) 15%,
    rgba(250, 250, 250, 1) 75%,
    rgba(232, 232, 232, 1) 80%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(238, 11, 82, 1) 15%,
    rgba(250, 250, 250, 1) 75%,
    rgba(232, 232, 232, 1) 80%
  );
  background: linear-gradient(
    90deg,
    rgba(238, 11, 82, 1) 15%,
    rgba(250, 250, 250, 1) 75%,
    rgba(232, 232, 232, 1) 80%
  );

  h1 {
    margin: 0 auto;
    font-size: 1rem;
    font-weight: bold;
    font-family: 'Hind', 'Inter', sans-serif;
  }
`

export const Navbar = styled.nav`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;

  a {
    text-decoration: none;
    font-size: 0.75rem;
  }
`
