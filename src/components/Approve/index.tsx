import { useContext } from 'react'

import { ParticipantsContext } from 'src/context/ParticipantsContext'
import { User } from '../Users/User'
import { ApproveContainer } from './styled'

export const Approve = () => {
  const { usersToApprove } = useContext(ParticipantsContext)

  return (
    <ApproveContainer>
      <h1>Aprovar pagamentos</h1>
      {usersToApprove.map((user) => (
        <User key={user.id} user={user} />
      ))}
      {usersToApprove.length <= 0 && (
        <p>Não há nenhuma inscrição para aprovar</p>
      )}
    </ApproveContainer>
  )
}
