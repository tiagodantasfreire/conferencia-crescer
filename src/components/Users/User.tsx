import { doc, updateDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from 'src/services/firebase-config'
import { ConfirmButton, UserContainer } from './styled'

interface IUser {
  user: {
    phone: string
    payment: string
    price: string
    receipt: string
    id: string
    approved: boolean
    users: { name: string; type: string; church: string }[]
  }
}

export const User = ({
  user: { users, phone, payment, price, receipt, id, approved },
}: IUser) => {
  const [localApproved, setLocalApproved] = useState(false)

  useEffect(() => {
    setLocalApproved(approved)
  }, [approved])

  const handleConfirm = async (id: string) => {
    const userDoc = doc(db, 'inscritos', id)
    await updateDoc(userDoc, { approved: true }).then(() =>
      setLocalApproved(true)
    )
  }

  return (
    <UserContainer>
      {users.map(({ name, type, church }) => (
        <p key={name}>
          Nome: {name} ({type}){' '}
          {type === 'Visitante' && <>| Igreja: {church}</>}
        </p>
      ))}
      <p>Contato: {phone}</p>
      <p>
        Pagou {payment}{' '}
        {receipt && (
          <a href={receipt} target="blank">
            | Link do comprovante
          </a>
        )}
      </p>
      <p>Valor: {price}</p>
      {localApproved && <p>Aprovado</p>}
      {localApproved === false && (
        <ConfirmButton onClick={() => handleConfirm(id)}>
          Aprovar pagamento
        </ConfirmButton>
      )}
    </UserContainer>
  )
}
