import { createContext, ReactNode, useState, useEffect } from 'react'

interface FormContextType {
  step: string
  isLoggedIn: boolean
  participants: number
  lote: number
  price: number
  nextStep: (_step: 'user' | 'calendar' | 'payment' | 'success') => void
  login: () => void
  addPeople: () => void
  removePeople: () => void
}

export const FormContext = createContext({} as FormContextType)

export const FormContextProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState<'user' | 'calendar' | 'payment' | 'success'>(
    'user'
  )

  const [lote, setLote] = useState(1)
  const [participants, setParticipants] = useState(1)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const price =
    lote === 1 && participants < 3
      ? 30
      : lote === 1 && participants >= 3
      ? 20
      : 40

  useEffect(() => {
    const date = new Date()
    const month = date.getMonth() + 1
    const day = date.getDate()

    if (month === 11 && day >= 7) setLote(2)
  }, [])

  const addPeople = () => setParticipants((state) => state + 1)
  const removePeople = () => setParticipants((state) => state - 1)

  const login = () => {
    setIsLoggedIn(true)
  }

  const nextStep = (step: 'user' | 'calendar' | 'payment' | 'success') => {
    setStep(step)
  }

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
        lote,
        price,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}
