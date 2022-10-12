import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0 5%;

  background-image: url('/bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  text-align: center;

  .names {
    font-weight: bold;
    text-transform: uppercase;
  }

  .phone {
    font-weight: bold;
  }
`

export const CheckContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    display: flex;
    gap: 0.5rem;
    font-size: 1.25rem;
    line-height: 1.1rem;
    text-transform: uppercase;
    margin-top: 1rem;
  }

  span {
    font-size: small;
  }
`
