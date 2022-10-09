import { FormEvent, useContext, useState } from 'react';
import { FormContext } from '../../context/FormContext';
import { Form, FormContainer, RadioContainer } from './styled';

export const UserForm = () => {
  const { nextStep } = useContext(FormContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [userType, setUserType] = useState('');
  const [guessChurch, setGuessChurch] = useState<string | undefined>();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      phone,
      userType,
      guessChurch: userType === 'Membro' ? 'Casa do Pai' : guessChurch,
    };

    console.log(userData);
    nextStep('calendar');
  };

  return (
    <FormContainer>
      <h1>Faça sua inscrição aqui</h1>
      <Form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Nome Completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Celular"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <RadioContainer>
          <div>
            <input
              type="radio"
              id="member"
              name="userType"
              value="Membro"
              onClick={() => setUserType('Membro')}
              required
            />
            <label htmlFor="member">Membro</label>
          </div>
          <div>
            <input
              type="radio"
              id="guess"
              name="userType"
              value="Visitante"
              onClick={() => setUserType('Visitante')}
            />
            <label htmlFor="guess">Visitante</label>
          </div>
        </RadioContainer>

        {userType === 'Visitante' && (
          <input
            type="text"
            placeholder="Qual sua igreja?"
            value={guessChurch}
            onChange={(e) => setGuessChurch(e.target.value)}
            required
          />
        )}

        <button>Próximo</button>
      </Form>
    </FormContainer>
  );
};
