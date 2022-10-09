import type { NextPage } from 'next';
import { useContext } from 'react';
import { CalendarForm } from '../components/CalendarForm';
import { Payment } from '../components/Payment';
import { Success } from '../components/Success';
import { UserForm } from '../components/UserForm';
import { FormContext } from '../context/FormContext';

import { Container } from '../styles/global';

const Home: NextPage = () => {
  const { step } = useContext(FormContext);

  return (
    <Container>
      {step === 'user' && <UserForm />}
      {step === 'calendar' && <CalendarForm />}
      {step === 'payment' && <Payment />}
      {step === 'success' && <Success />}
    </Container>
  );
};

export default Home;
