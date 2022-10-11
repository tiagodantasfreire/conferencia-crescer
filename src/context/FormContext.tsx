import { createContext, ReactNode, useState } from 'react';

interface FormContextType {
  step: string;
  isLoggedIn: boolean;
  participants: number;
  nextStep: (step: 'user' | 'calendar' | 'payment' | 'success') => void;
  login: () => void;
  addPeople: () => void;
  removePeople: () => void;
}

export const FormContext = createContext({} as FormContextType);

export const FormContextProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState<'user' | 'calendar' | 'payment' | 'success'>(
    'payment'
  );

  const [participants, setParticipants] = useState(1);

  const addPeople = () => setParticipants((state) => state + 1);

  const removePeople = () => setParticipants((state) => state - 1);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const nextStep = (step: 'user' | 'calendar' | 'payment' | 'success') => {
    setStep(step);
  };

  return (
    <FormContext.Provider
      value={{
        nextStep,
        step,
        login,
        isLoggedIn,
        addPeople,
        participants,
        removePeople,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
