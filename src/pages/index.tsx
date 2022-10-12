import type { NextPage } from 'next'
import { useContext } from 'react'

import { Payment } from '../components/Payment'
import { Success } from '../components/Success'
import { UserForm } from '../components/UserForm'
import { FormContext } from '../context/FormContext'

const Home: NextPage = () => {
  const { step } = useContext(FormContext)

  return (
    <>
      {step === 'user' && <UserForm />}
      {step === 'payment' && <Payment />}
      {step === 'success' && <Success />}
    </>
  )
}

export default Home
