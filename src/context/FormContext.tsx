import { createContext, ReactNode, useState } from 'react';

interface FormContextType {
  step: string;
  nextStep: (step: 'user' | 'calendar' | 'payment' | 'success') => void;
}

export const FormContext = createContext({} as FormContextType);

export const FormContextProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState<'user' | 'calendar' | 'payment' | 'success'>(
    'user'
  );

  const nextStep = (step: 'user' | 'calendar' | 'payment' | 'success') => {
    setStep(step);
  };

  return (
    <FormContext.Provider value={{ nextStep, step }}>
      {children}
    </FormContext.Provider>
  );
};
