import { useContext } from 'react'

import { Approve } from 'src/components/Approve'
import { LoginPage } from 'src/components/LoginPage'
import { FormContext } from 'src/context/FormContext'
import { Container } from 'src/styles/global'

const Aprovar = () => {
  const { isLoggedIn } = useContext(FormContext)

  return <Container>{!isLoggedIn ? <LoginPage /> : <Approve />}</Container>
}

export default Aprovar
