import { useContext } from 'react'
import { CircleNotch } from 'phosphor-react'

import { LoadingContainer } from './styled'
import { ParticipantsContext } from 'src/context/ParticipantsContext'

export const Loading = () => {
  const { numberOfParticipants } = useContext(ParticipantsContext)

  return (
    <LoadingContainer>
      <div>
        <CircleNotch size={48} />
        <h1>Reservando...</h1>
        <p>
          Espere um segundo, estamos colocando{' '}
          {numberOfParticipants === 1 ? 'seu nome' : 'o nome de vocês'} na lista
        </p>
      </div>
    </LoadingContainer>
  )
}
