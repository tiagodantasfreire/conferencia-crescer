import { useContext } from 'react'

import { Vacancies } from 'src/components/Vacancies'
import { LoginPage } from '../components/LoginPage'
import { FormContext } from '../context/FormContext'

import { Container } from '../styles/global'

const VagasRestantes = () => {
  const { isLoggedIn } = useContext(FormContext)

  return <Container>{isLoggedIn ? <Vacancies /> : <LoginPage />}</Container>
}

export default VagasRestantes
