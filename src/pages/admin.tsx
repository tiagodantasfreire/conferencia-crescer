import { useContext } from 'react'
import { NextPage } from 'next'

import { LoginPage } from '../components/LoginPage'
import { Users } from '../components/Users'
import { FormContext } from '../context/FormContext'

import { Container } from '../styles/global'

const Admin: NextPage = () => {
  const { isLoggedIn } = useContext(FormContext)

  return <Container>{isLoggedIn ? <Users /> : <LoginPage />}</Container>
}

export default Admin
