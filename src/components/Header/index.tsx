import { useContext } from 'react'
import { ArrowLeft } from 'phosphor-react'

import { HeaderContainer } from './styled'
import { FormContext } from '../../context/FormContext'
import Link from 'next/link'

export const Header = () => {
  const { step } = useContext(FormContext)

  return (
    <HeaderContainer step={step}>
      <h1>
        <Link href="/" prefetch={false}>
          Conferência Crescer
        </Link>
      </h1>
      {step !== 'success' && <p>Passo {step === 'user' ? 1 : 2} de 2</p>}
    </HeaderContainer>
  )
}
