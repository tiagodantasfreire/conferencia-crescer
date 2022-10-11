import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

interface ParticipantsContextType {
  participants: {
    users: {
      name: string;
      type: 'Membro' | 'Visitante';
      church: string;
    }[];
    phone: string;
  };
  numberOfParticipants: number;
  setParticipants: Dispatch<
    SetStateAction<{
      users: {
        name: string;
        type: 'Membro' | 'Visitante';
        church: string;
      }[];
      phone: string;
    }>
  >;
}

export const ParticipantsContext = createContext({} as ParticipantsContextType);

export const ParticipantsContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [participants, setParticipants] = useState<{
    users: { name: string; type: 'Membro' | 'Visitante'; church: string }[];
    phone: string;
  }>({ users: [{ name: '', type: 'Membro', church: '' }], phone: '' });

  const numberOfParticipants = participants.users.length;

  return (
    <ParticipantsContext.Provider
      value={{ participants, setParticipants, numberOfParticipants }}
    >
      {children}
    </ParticipantsContext.Provider>
  );
};
