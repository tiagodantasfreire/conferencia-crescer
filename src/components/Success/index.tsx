import { useContext } from 'react'
import { Check, CheckCircle, CircleWavyCheck } from 'phosphor-react'

import { ParticipantsContext } from '../../context/ParticipantsContext'
import { CheckContainer, SuccessContainer } from './styled'

export const Success = () => {
  const { participants } = useContext(ParticipantsContext)

  return (
    <SuccessContainer>
      <CheckContainer>
        <CircleWavyCheck size={48} color="#16a34a" weight="fill" />
        <h1>Inscrição realizada!</h1>
        <span>Estamos te esperamos para vivermos momentos sobrenaturais</span>
      </CheckContainer>
      <p>
        Agora basta você informar os seguintes nomes na entrada da conferência:{' '}
      </p>
      {participants.users.map((user) => (
        <p key={user.name} className="names">
          {user.name}
        </p>
      ))}

      <p>
        E caso haja algum problema com sua inscrição, entraremos em contato com
        você pelo número:
      </p>

      <p className="phone">{participants.phone}</p>
    </SuccessContainer>
  )
}
