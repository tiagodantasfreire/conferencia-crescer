import { useContext } from 'react';
import { ParticipantsContext } from '../../context/ParticipantsContext';

export const Success = () => {
  const { participants } = useContext(ParticipantsContext);

  return (
    <div>
      <h1>Você realizou sua inscrição</h1>
      <p>
        Agora basta você informar os seguintes nomes na entrada da conferência:{' '}
      </p>
      {participants.users.map((user) => (
        <p key={user.name}>{user.name}</p>
      ))}

      <p>
        E caso haja algum problema com sua inscrição, entraremos em contato com
        você pelo número <br /> {participants.phone}
      </p>
    </div>
  );
};
