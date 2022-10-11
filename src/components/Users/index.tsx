import { useContext } from 'react'

import { ParticipantsContext } from '../../context/ParticipantsContext'
import { UserContainer, UsersContainer } from './styled'

export const Users = () => {
  const { users, totalOfUsers } = useContext(ParticipantsContext)

  return (
    <UsersContainer>
      <h1>Inscritos</h1>
      <p>Nº de participantes: {totalOfUsers}</p>
      {users.map(({ id, phone, users, payment, price }) => (
        <UserContainer key={id}>
          {users.map(({ name, type, church }) => (
            <p key={name}>
              Nome: {name} ({type}) | Igreja: {church}
            </p>
          ))}
          <p>Contato: {phone}</p>
          <p>Pagou {payment}</p>
          <p>Valor: {price}</p>
        </UserContainer>
      ))}
    </UsersContainer>
  )
}
