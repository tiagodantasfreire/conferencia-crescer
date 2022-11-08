import { useContext } from 'react'

import { ParticipantsContext } from 'src/context/ParticipantsContext'
import { User } from '../Users/User'
import { UnfinishedContainer, VacanciesContainer } from './styled'

export const Vacancies = () => {
  const { totalOfUsers, usersToApprove, unfinishedSubscriptions } =
    useContext(ParticipantsContext)

  const totalSubscriptions = usersToApprove.map((user) => user.users.length)

  const total =
    totalSubscriptions.length > 0
      ? totalSubscriptions.reduce((sum, i) => {
          return sum + i
        })
      : 0

  const unfinishedUsers = unfinishedSubscriptions.map(
    (user) => user.users.length
  )
  const totalUnfinished =
    unfinishedUsers.length > 0
      ? unfinishedUsers.reduce((sum, i) => {
          return sum + i
        })
      : 0

  const lastVacancies = 120 - totalOfUsers - total
  const percentLast = 100 - (100 * lastVacancies) / 120

  return (
    <VacanciesContainer>
      <p>
        Inscrições aprovadas: <strong>{totalOfUsers}</strong>
      </p>
      <p>
        Inscrições pendentes: <strong>{total}</strong>
      </p>
      <p>
        Inscrições não finalizadas: <strong>{totalUnfinished}</strong>
      </p>
      <p>
        <strong>{lastVacancies}</strong> vagas restantes
      </p>
      <p>
        <strong>{percentLast.toFixed()}% das vagas já foram preenchidas</strong>
      </p>

      <progress value={total + totalOfUsers} max="120" />

      {totalUnfinished > 0 && (
        <UnfinishedContainer>
          <h1>Inscrições não finalizadas</h1>
          {unfinishedSubscriptions.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </UnfinishedContainer>
      )}
    </VacanciesContainer>
  )
}
