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
  users: {
    name: string | false
    type: 'Membro' | 'Visitante'
    church: string
  }[]
  phone: string
  payment: string
  id: string
  price: string
  approved: boolean
  receipt: string
}

interface ParticipantsContextType {
  participants: {
    users: {
      name: string | false
      type: 'Membro' | 'Visitante'
      church: string
    }[]
    phone: string
  }
  users: UserType[]
  usersToApprove: UserType[]
  numberOfParticipants: number
  totalOfUsers: number
  setParticipants: Dispatch<
    SetStateAction<{
      users: {
        name: string | false
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
    users: {
      name: string | false
      type: 'Membro' | 'Visitante'
      church: string
    }[]
    phone: string
  }>({ users: [{ name: '', type: 'Membro', church: '' }], phone: '' })

  const numberOfParticipants = participants.users.length

  const [users, setUsers] = useState<UserType[]>([])
  const [usersToApprove, setUsersToAprove] = useState<UserType[]>([])

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(inscricoesCollectionRef)
      const users = data.docs.map(
        (doc) => ({ ...doc.data(), id: doc.id } as UserType)
      )

      const approvedUsers = users.filter((user) => user.approved)
      const userToApprove = users.filter((user) => user.approved === false)

      setUsersToAprove(userToApprove)
      setUsers(approvedUsers)
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
        usersToApprove,
      }}
    >
      {children}
    </ParticipantsContext.Provider>
  )
}
