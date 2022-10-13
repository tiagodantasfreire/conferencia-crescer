import Link from 'next/link'
import { MagnifyingGlass } from 'phosphor-react'
import { useContext, useState } from 'react'

import { ParticipantsContext } from '../../context/ParticipantsContext'
import { SearchBarContainer, UsersContainer } from './styled'
import { User } from './User'

export const Users = () => {
  const { users, totalOfUsers, usersToApprove } =
    useContext(ParticipantsContext)
  const [search, setSearch] = useState('')

  const filteredUsers = users.filter(
    (users) =>
      users.users.flat().filter((user) => {
        if (
          user.name
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toUpperCase()
            .includes(
              search
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .toUpperCase()
            )
        )
          return user
      }).length > 0 && users
  )

  return (
    <UsersContainer>
      <h1>Participantes</h1>
      <SearchBarContainer>
        <MagnifyingGlass size={18} />
        <input
          type="search"
          placeholder="Pesquise por nome"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </SearchBarContainer>

      {!search && (
        <>
          <p>Nº de participantes: {totalOfUsers}</p>
          {users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </>
      )}

      {search &&
        filteredUsers.map((filtered) => (
          <User key={filtered.id} user={filtered} />
        ))}
    </UsersContainer>
  )
}
