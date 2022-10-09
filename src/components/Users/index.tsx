import { getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { inscricoesCollectionRef } from '../../services/firebase-config';
import { UserContainer, UsersContainer } from './styled';

interface UserType {
  name: string;
  phone: string;
  days: [string];
  type: string;
  payment: string;
  church: string;
  id: string;
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

      {users.map((user) => (
        <UserContainer key={user.id}>
          <p>
            Nome: {user.name} ({user.type})
          </p>
          <p>Dias: {user.days.map((day) => day)}</p>
          <p>Contato: {user.phone}</p>
          <p>
            Igreja: {user.church} | Pagou {user.payment}
          </p>
        </UserContainer>
      ))}
    </UsersContainer>
  );
};
