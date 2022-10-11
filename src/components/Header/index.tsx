import { useContext } from 'react'
import { ArrowLeft } from 'phosphor-react'

import { HeaderContainer } from './styled'
import { FormContext } from '../../context/FormContext'

export const Header = () => {
  const { step, nextStep } = useContext(FormContext)

  return (
    <HeaderContainer>
      <h1>Conferência Crescer</h1>
      {step === 'payment' && (
        <span onClick={() => nextStep('user')}>
          <ArrowLeft size={16} /> Voltar
        </span>
      )}
      {step !== 'success' && <p>Passo {step === 'user' ? 1 : 2} de 2</p>}
    </HeaderContainer>
  )
}
