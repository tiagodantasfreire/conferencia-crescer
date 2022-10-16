import { useContext } from 'react'
import { ParticipantsContext } from 'src/context/ParticipantsContext'
import { VacanciesContainer } from './styled'

export const Vacancies = () => {
  const { totalOfUsers, usersToApprove } = useContext(ParticipantsContext)

  const lastVacancies = 120 - totalOfUsers - usersToApprove.length
  const percentLast = 100 - (100 * lastVacancies) / 120

  return (
    <VacanciesContainer>
      <p>
        Inscrições aprovadas: <strong>{totalOfUsers}</strong>
      </p>
      <p>
        Inscrições pendentes: <strong>{usersToApprove.length}</strong>
      </p>
      <p>
        <strong>{lastVacancies}</strong> vagas restantes
      </p>
      <p>
        <strong>{percentLast.toFixed()}% das vagas já foram preenchidas</strong>
      </p>

      <progress value={totalOfUsers} max="120">
        70 %
      </progress>
    </VacanciesContainer>
  )
}
