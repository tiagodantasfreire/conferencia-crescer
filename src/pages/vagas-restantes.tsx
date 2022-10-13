import { useContext } from 'react'
import { ParticipantsContext } from 'src/context/ParticipantsContext'

const VagasRestantes = () => {
  const { totalOfUsers, usersToApprove } = useContext(ParticipantsContext)

  const lastVacancies = 120 - totalOfUsers - usersToApprove.length

  const percentLast = (100 * lastVacancies) / 120

  return (
    <div>
      <p>Inscrições aprovadas: {totalOfUsers}</p>
      <p>Inscrições pendentes: {usersToApprove.length}</p>
      <p>{lastVacancies} vagas restantes</p>
      <p>{percentLast.toFixed()}% das vagas já foram preenchidas</p>
    </div>
  )
}

export default VagasRestantes
