import { FormEvent, useContext, useState, useEffect } from 'react'
import ReactInputMask from 'react-input-mask'

import { FormContext } from '../../context/FormContext'
import {
  AddRemoveContainer,
  ButtonContainer,
  Form,
  FormContainer,
  NameInputContainer,
  RadioContainer,
} from './styled'
import { ParticipantsContext } from '../../context/ParticipantsContext'
import { Container } from 'src/styles/global'
import { doc, setDoc } from 'firebase/firestore'
import { v4 as uuid } from 'uuid'
import { db } from 'src/services/firebase-config'

const UserForm = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [userType, setUserType] = useState<'Membro' | 'Visitante'>('Membro')
  const [userType2, setUserType2] = useState<'Membro' | 'Visitante'>('Membro')
  const [userType3, setUserType3] = useState<'Membro' | 'Visitante'>('Membro')
  const [userType4, setUserType4] = useState<'Membro' | 'Visitante'>('Membro')
  const [userType5, setUserType5] = useState<'Membro' | 'Visitante'>('Membro')
  const [church, setChurch] = useState('')
  const [church2, setChurch2] = useState('')
  const [church3, setChurch3] = useState('')
  const [church4, setChurch4] = useState('')
  const [church5, setChurch5] = useState('')
  const [name2, setName2] = useState('')
  const [showName2, setShowName2] = useState(false)
  const [name3, setName3] = useState('')
  const [showName3, setShowName3] = useState(false)
  const [name4, setName4] = useState('')
  const [showName4, setShowName4] = useState(false)
  const [name5, setName5] = useState('')
  const [showName5, setShowName5] = useState(false)

  const { nextStep, participants, addPeople, removePeople, price } =
    useContext(FormContext)

  const { setParticipants } = useContext(ParticipantsContext)

  useEffect(() => {
    participants >= 2 ? setShowName2(true) : setShowName2(false)
    participants >= 3 ? setShowName3(true) : setShowName3(false)
    participants >= 4 ? setShowName4(true) : setShowName4(false)
    participants === 5 ? setShowName5(true) : setShowName5(false)
  }, [participants])

  const remove = () => {
    removePeople()
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const uniqueId = uuid()

    const allParticipants = [
      {
        name,
        type: userType,
        church: userType === 'Membro' ? 'Casa do Pai' : church,
      },
      {
        name: showName2 && name2,
        type: userType2,
        church: userType2 === 'Membro' ? 'Casa do Pai' : church2,
      },
      {
        name: showName3 && name3,
        type: userType3,
        church: userType3 === 'Membro' ? 'Casa do Pai' : church3,
      },
      {
        name: showName4 && name4,
        type: userType4,
        church: userType4 === 'Membro' ? 'Casa do Pai' : church4,
      },
      {
        name: showName5 && name5,
        type: userType5,
        church: userType5 === 'Membro' ? 'Casa do Pai' : church5,
      },
    ]

    const data = {
      users: allParticipants.filter(
        (participant) => participant.name && participant.name.length > 0
      ),
      phone,
      isSubscriptionFinished: false,
      approved: false,
      id: uniqueId,
    }

    setParticipants(data)
    setDoc(doc(db, 'inscritos', uniqueId), data)
    nextStep('payment')
  }

  return (
    <Container>
      <FormContainer>
        <h1>Faça sua inscrição</h1>
        <Form onSubmit={handleSubmit}>
          <div>
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
                  placeholder="Qual sua igreja? (Opcional)"
                  value={church}
                  onChange={(e) => setChurch(e.target.value)}
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
                    placeholder="Qual sua igreja? (Opcional)"
                    value={church2}
                    onChange={(e) => setChurch2(e.target.value)}
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
                    placeholder="Qual sua igreja? (Opcional)"
                    value={church3}
                    onChange={(e) => setChurch3(e.target.value)}
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
                    placeholder="Qual sua igreja? (Opcional)"
                    value={church4}
                    onChange={(e) => setChurch4(e.target.value)}
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
              </NameInputContainer>
            )}

            {showName5 && (
              <NameInputContainer>
                <input
                  type="text"
                  placeholder="Nome Completo"
                  value={name5}
                  onChange={(e) => setName5(e.target.value)}
                  required
                />

                {userType5 === 'Visitante' && (
                  <input
                    type="text"
                    placeholder="Qual sua igreja? (Opcional)"
                    value={church5}
                    onChange={(e) => setChurch5(e.target.value)}
                  />
                )}

                <RadioContainer>
                  <div>
                    <input
                      type="radio"
                      id="member5"
                      name="userType5"
                      value="Membro"
                      onClick={() => setUserType5('Membro')}
                      required
                    />
                    <label htmlFor="member5">Membro</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="guess5"
                      name="userType5"
                      value="Visitante"
                      onClick={() => setUserType5('Visitante')}
                    />
                    <label htmlFor="guess5">Visitante</label>
                  </div>
                </RadioContainer>

                <p className="limit">
                  Só é possível adicionar cinco pessoas por vez
                </p>
              </NameInputContainer>
            )}

            <AddRemoveContainer>
              {participants < 5 && (
                <p onClick={addPeople} className="add">
                  + Adicionar participante
                </p>
              )}

              {participants !== 1 && (
                <p onClick={remove} className="remove">
                  - Remover participante
                </p>
              )}
            </AddRemoveContainer>
          </div>

          <ReactInputMask
            mask="(99) 99999-9999"
            placeholder="Celular"
            inputMode="numeric"
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <ButtonContainer>
            <span>Total: R${price * participants}</span>
            <button>Ir para o pagamento</button>
          </ButtonContainer>
        </Form>
      </FormContainer>
    </Container>
  )
}

export default UserForm
