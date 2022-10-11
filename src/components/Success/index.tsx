import { Check } from 'phosphor-react';
import { useContext } from 'react';

import { ParticipantsContext } from '../../context/ParticipantsContext';
import { SuccessContainer } from './styled';

export const Success = () => {
  const { participants } = useContext(ParticipantsContext);

  return (
    <SuccessContainer>
      <h1>
        Você realizou sua inscrição <Check size={32} />
      </h1>
      <p>
        Agora basta você informar os seguintes nomes na entrada da conferência:{' '}
      </p>
      {participants.users.map((user) => (
        <p key={user.name} className="names">
          {user.name}
        </p>
      ))}

      <p>
        E caso haja algum problema com sua inscrição, entraremos em contato com
        você pelo número:
      </p>

      <p className="phone">{participants.phone}</p>
    </SuccessContainer>
  );
};
