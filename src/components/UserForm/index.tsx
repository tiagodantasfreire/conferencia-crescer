import { FormEvent, useContext, useState, useEffect } from 'react';
import { FormContext } from '../../context/FormContext';
import {
  AddRemoveContainer,
  Form,
  FormContainer,
  NameInputContainer,
  RadioContainer,
} from './styled';

import ReactInputMask from 'react-input-mask';
import { ParticipantsContext } from '../../context/ParticipantsContext';

export const UserForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [userType, setUserType] = useState<'Membro' | 'Visitante'>('Membro');
  const [userType2, setUserType2] = useState<'Membro' | 'Visitante'>('Membro');
  const [userType3, setUserType3] = useState<'Membro' | 'Visitante'>('Membro');
  const [userType4, setUserType4] = useState<'Membro' | 'Visitante'>('Membro');
  const [church, setChurch] = useState('');
  const [church2, setChurch2] = useState('');
  const [church3, setChurch3] = useState('');
  const [church4, setChurch4] = useState('');
  const [name2, setName2] = useState('');
  const [showName2, setShowName2] = useState(false);
  const [name3, setName3] = useState('');
  const [showName3, setShowName3] = useState(false);
  const [name4, setName4] = useState('');
  const [showName4, setShowName4] = useState(false);

  const { nextStep, participants, addPeople, removePeople } =
    useContext(FormContext);

  const { setParticipants } = useContext(ParticipantsContext);

  useEffect(() => {
    participants >= 2 ? setShowName2(true) : setShowName2(false);
    participants >= 3 ? setShowName3(true) : setShowName3(false);
    participants === 4 ? setShowName4(true) : setShowName4(false);
  }, [participants]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const allParticipants = [
      {
        name,
        type: userType,
        church: userType === 'Membro' ? 'Casa do Pai' : church,
      },
      {
        name: name2,
        type: userType2,
        church: userType2 === 'Membro' ? 'Casa do Pai' : church2,
      },
      {
        name: name3,
        type: userType3,
        church: userType3 === 'Membro' ? 'Casa do Pai' : church3,
      },
      {
        name: name4,
        type: userType4,
        church: userType4 === 'Membro' ? 'Casa do Pai' : church4,
      },
    ];

    const data = {
      users: allParticipants.filter(
        (participant) => participant.name.length > 0
      ),
      phone,
    };

    setParticipants(data);
    nextStep('payment');
  };

  return (
    <FormContainer>
      <h1>Faça sua inscrição aqui</h1>
      <Form onSubmit={handleSubmit}>
        <NameInputContainer>
          <input
            type="text"
            placeholder="Nome Completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          {userType === 'Visitante' && (
            <input
              type="text"
              placeholder="Qual sua igreja?"
              value={church}
              onChange={(e) => setChurch(e.target.value)}
              required
            />
          )}

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
        </NameInputContainer>

        {showName2 && (
          <NameInputContainer>
            <input
              type="text"
              placeholder="Nome Completo"
              value={name2}
              onChange={(e) => setName2(e.target.value)}
              required
            />

            {userType2 === 'Visitante' && (
              <input
                type="text"
                placeholder="Qual sua igreja?"
                value={church2}
                onChange={(e) => setChurch2(e.target.value)}
                required
              />
            )}

            <RadioContainer>
              <div>
                <input
                  type="radio"
                  id="member2"
                  name="userType2"
                  value="Membro"
                  onClick={() => setUserType2('Membro')}
                  required
                />
                <label htmlFor="member2">Membro</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="guess2"
                  name="userType2"
                  value="Visitante"
                  onClick={() => setUserType2('Visitante')}
                />
                <label htmlFor="guess2">Visitante</label>
              </div>
            </RadioContainer>
          </NameInputContainer>
        )}

        {showName3 && (
          <NameInputContainer>
            <input
              type="text"
              placeholder="Nome Completo"
              value={name3}
              onChange={(e) => setName3(e.target.value)}
              required
            />

            {userType3 === 'Visitante' && (
              <input
                type="text"
                placeholder="Qual sua igreja?"
                value={church3}
                onChange={(e) => setChurch3(e.target.value)}
                required
              />
            )}

            <RadioContainer>
              <div>
                <input
                  type="radio"
                  id="member3"
                  name="userType3"
                  value="Membro"
                  onClick={() => setUserType3('Membro')}
                  required
                />
                <label htmlFor="member3">Membro</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="guess3"
                  name="userType3"
                  value="Visitante"
                  onClick={() => setUserType3('Visitante')}
                />
                <label htmlFor="guess3">Visitante</label>
              </div>
            </RadioContainer>
          </NameInputContainer>
        )}

        {showName4 && (
          <NameInputContainer>
            <input
              type="text"
              placeholder="Nome Completo"
              value={name4}
              onChange={(e) => setName4(e.target.value)}
              required
            />

            {userType4 === 'Visitante' && (
              <input
                type="text"
                placeholder="Qual sua igreja?"
                value={church4}
                onChange={(e) => setChurch4(e.target.value)}
                required
              />
            )}

            <RadioContainer>
              <div>
                <input
                  type="radio"
                  id="member4"
                  name="userType4"
                  value="Membro"
                  onClick={() => setUserType4('Membro')}
                  required
                />
                <label htmlFor="member4">Membro</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="guess4"
                  name="userType4"
                  value="Visitante"
                  onClick={() => setUserType4('Visitante')}
                />
                <label htmlFor="guess4">Visitante</label>
              </div>
            </RadioContainer>

            <p className="limit">
              Só é possível adicionar quatro pessoas por vez
            </p>
          </NameInputContainer>
        )}

        <AddRemoveContainer>
          {participants !== 1 && (
            <p onClick={removePeople} className="remove">
              - Remover participante
            </p>
          )}

          {participants < 4 && (
            <p onClick={addPeople} className="add">
              + Adicionar participante
            </p>
          )}
        </AddRemoveContainer>

        <ReactInputMask
          mask="(99) 99999-9999"
          placeholder="Celular"
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <button>Próximo</button>
      </Form>
    </FormContainer>
  );
};
