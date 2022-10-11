import { getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { inscricoesCollectionRef } from '../../services/firebase-config';
import { UserContainer, UsersContainer } from './styled';

interface UserType {
  users: { name: string; type: 'Membro' | 'Visitante'; church: string }[];
  phone: string;
  payment: string;
  id: string;
  price: string;
}

export const Users = () => {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(inscricoesCollectionRef);
      const users = data.docs.map(
        (doc) => ({ ...doc.data(), id: doc.id } as UserType)
      );

      setUsers(users);
    };

    getUsers();
  }, []);
  return (
    <UsersContainer>
      <h1>Inscritos</h1>

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
  );
};
