import { useContext } from 'react'

import { ParticipantsContext } from 'src/context/ParticipantsContext'
import { VacanciesContainer } from './styled'

export const Vacancies = () => {
  const { totalOfUsers, usersToApprove } = useContext(ParticipantsContext)

  const totalSubscriptions = usersToApprove.map((user) => user.users.length)

  const total =
    totalSubscriptions.length > 0
      ? totalSubscriptions.reduce((sum, i) => {
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
        <strong>{lastVacancies}</strong> vagas restantes
      </p>
      <p>
        <strong>
          {percentLast.toFixed(2)}% das vagas já foram preenchidas
        </strong>
      </p>

      <progress value={total + totalOfUsers} max="120">
        70 %
      </progress>
    </VacanciesContainer>
  )
}
