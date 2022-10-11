import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react'
import { getDocs } from 'firebase/firestore'
import { inscricoesCollectionRef } from '../services/firebase-config'

interface UserType {
  users: { name: string; type: 'Membro' | 'Visitante'; church: string }[]
  phone: string
  payment: string
  id: string
  price: string
}

interface ParticipantsContextType {
  participants: {
    users: {
      name: string
      type: 'Membro' | 'Visitante'
      church: string
    }[]
    phone: string
  }
  users: UserType[]
  numberOfParticipants: number
  totalOfUsers: number
  setParticipants: Dispatch<
    SetStateAction<{
      users: {
        name: string
        type: 'Membro' | 'Visitante'
        church: string
      }[]
      phone: string
    }>
  >
}

export const ParticipantsContext = createContext({} as ParticipantsContextType)

export const ParticipantsContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [participants, setParticipants] = useState<{
    users: { name: string; type: 'Membro' | 'Visitante'; church: string }[]
    phone: string
  }>({ users: [{ name: '', type: 'Membro', church: '' }], phone: '' })

  const numberOfParticipants = participants.users.length

  const [users, setUsers] = useState<UserType[]>([])

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(inscricoesCollectionRef)
      const users = data.docs.map(
        (doc) => ({ ...doc.data(), id: doc.id } as UserType)
      )

      setUsers(users)
    }

    getUsers()
  }, [])

  const totalOfUsers =
    users.length &&
    users
      .map(({ users }) => users.length)
      .reduce((acc, inc) => {
        return acc + inc
      })

  return (
    <ParticipantsContext.Provider
      value={{
        participants,
        setParticipants,
        numberOfParticipants,
        users,
        totalOfUsers,
      }}
    >
      {children}
    </ParticipantsContext.Provider>
  )
}
