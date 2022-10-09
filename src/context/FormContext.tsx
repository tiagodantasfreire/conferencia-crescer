import { createContext, ReactNode, useState } from 'react';

interface FormContextType {
  step: string;
  isLoggedIn: boolean;
  nextStep: (step: 'user' | 'calendar' | 'payment' | 'success') => void;
  login: () => void;
}

export const FormContext = createContext({} as FormContextType);

export const FormContextProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState<'user' | 'calendar' | 'payment' | 'success'>(
    'user'
  );

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const login = () => {
    setIsLoggedIn(true);
  };

  const nextStep = (step: 'user' | 'calendar' | 'payment' | 'success') => {
    setStep(step);
  };

  return (
    <FormContext.Provider value={{ nextStep, step, login, isLoggedIn }}>
      {children}
    </FormContext.Provider>
  );
};
