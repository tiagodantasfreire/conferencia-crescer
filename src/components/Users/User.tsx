import { UserContainer } from './styled'

interface IUser {
  user: {
    phone: string
    payment: string
    price: string
    users: { name: string; type: string; church: string }[]
  }
}

export const User = ({ user: { users, phone, payment, price } }: IUser) => {
  return (
    <UserContainer>
      {users.map(({ name, type, church }) => (
        <p key={name}>
          Nome: {name} ({type}){' '}
          {type === 'Visitante' && <>| Igreja: {church}</>}
        </p>
      ))}
      <p>Contato: {phone}</p>
      <p>Pagou {payment}</p>
      <p>Valor: {price}</p>
    </UserContainer>
  )
}
