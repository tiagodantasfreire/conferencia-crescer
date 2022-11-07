import type { NextPage } from 'next'
import { useContext, lazy, Suspense } from 'react'

import { FormContext } from '../context/FormContext'
import UserForm from 'src/components/UserForm'

const Payment = lazy(() => import('src/components/Payment'))
const Success = lazy(() => import('src/components/Success'))

const Home: NextPage = () => {
  const { step } = useContext(FormContext)

  return (
    <>
      {step === 'user' && <UserForm />}
      <Suspense
        fallback={
          <p
            style={{
              textAlign: 'center',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '90vw',
            }}
          >
            Carregando os dados de pagamento...
          </p>
        }
      >
        {step === 'payment' && <Payment />}
        {step === 'success' && <Success />}
      </Suspense>
    </>
  )
}

export default Home
