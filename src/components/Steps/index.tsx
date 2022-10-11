import { useContext } from 'react'
import { User, CreditCard, Check } from 'phosphor-react'

import { StepsContainer } from './styled'
import { FormContext } from '../../context/FormContext'

export const Steps = () => {
  const { step } = useContext(FormContext)

  return (
    <StepsContainer>
      <User size={32} />
      <CreditCard size={32} />
      {step === 'success' ? (
        <Check size={32} color="#006b07" weight="fill" />
      ) : (
        <Check size={32} />
      )}
    </StepsContainer>
  )
}
