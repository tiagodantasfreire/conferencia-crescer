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

export const UserForm = () => {
  const [name, setName] = useState('')
  const [isValidName, setIsValidName] = useState(true)
  const [isValidName2, setIsValidName2] = useState(true)
  const [isValidName3, setIsValidName3] = useState(true)
  const [isValidName4, setIsValidName4] = useState(true)
  const [isValidName5, setIsValidName5] = useState(true)
  const [phone, setPhone] = useState('')
  const [isValidPhone, setIsValidPhone] = useState(true)
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

  const verifyName = (n: string) => {
    let isValid = false
    const name = n?.split(' ')[0]
    const lastName = n?.split(' ')[1]

    if (name?.length > 3 && lastName?.length > 3) {
      isValid = true
    }

    return isValid
  }

  const verifyPhone = (phone: string) => {
    const formattedPhone = phone
      .replaceAll('_', '')
      .replace('(', '')
      .replace(')', '')
      .replace('-', '')

    formattedPhone.length < 11 ? setIsValidPhone(false) : setIsValidPhone(true)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (
      !isValidName ||
      (!isValidName2 && showName2) ||
      (!isValidName3 && showName3) ||
      (!isValidName4 && showName4) ||
      (!isValidName5 && showName5) ||
      !isValidPhone
    ) {
      return
    }

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
    }

    setParticipants(data)
    nextStep('payment')
  }

  return (
    <Container>
      <FormContainer>
        <h1>Faça sua inscrição</h1>
        <Form onSubmit={handleSubmit}>
          <div>
            <NameInputContainer isValid={isValidName}>
              <input
                type="text"
                placeholder="Nome Completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={(e) => {
                  const isValid = verifyName(e.target.value)
                  setIsValidName(isValid)
                }}
                required
              />
              {!isValidName && <span>Coloque nome e sobrenome</span>}

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
              <NameInputContainer isValid={isValidName2}>
                <input
                  type="text"
                  placeholder="Nome Completo"
                  value={name2}
                  onChange={(e) => setName2(e.target.value)}
                  onBlur={(e) => {
                    const isValid = verifyName(e.target.value)
                    setIsValidName2(isValid)
                  }}
                  required
                />
                {!isValidName2 && <span>Coloque nome e sobrenome</span>}

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
              <NameInputContainer isValid={isValidName3}>
                <input
                  type="text"
                  placeholder="Nome Completo"
                  value={name3}
                  onChange={(e) => setName3(e.target.value)}
                  onBlur={(e) => {
                    const isValid = verifyName(e.target.value)
                    setIsValidName3(isValid)
                  }}
                  required
                />
                {!isValidName3 && <span>Coloque nome e sobrenome</span>}

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
              <NameInputContainer isValid={isValidName4}>
                <input
                  type="text"
                  placeholder="Nome Completo"
                  value={name4}
                  onChange={(e) => setName4(e.target.value)}
                  onBlur={(e) => {
                    const isValid = verifyName(e.target.value)
                    setIsValidName4(isValid)
                  }}
                  required
                />
                {!isValidName4 && <span>Coloque nome e sobrenome</span>}

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
              </NameInputContainer>
            )}

            {showName5 && (
              <NameInputContainer isValid={isValidName5}>
                <input
                  type="text"
                  placeholder="Nome Completo"
                  value={name5}
                  onChange={(e) => setName5(e.target.value)}
                  onBlur={(e) => {
                    const isValid = verifyName(e.target.value)
                    setIsValidName5(isValid)
                  }}
                  required
                />
                {!isValidName5 && <span>Coloque nome e sobrenome</span>}

                {userType5 === 'Visitante' && (
                  <input
                    type="text"
                    placeholder="Qual sua igreja?"
                    value={church5}
                    onChange={(e) => setChurch5(e.target.value)}
                    required
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
              {participants !== 1 && (
                <p onClick={remove} className="remove">
                  - Remover participante
                </p>
              )}

              {participants < 5 && (
                <p onClick={addPeople} className="add">
                  + Adicionar participante
                </p>
              )}
            </AddRemoveContainer>
          </div>

          <ReactInputMask
            mask="(99) 99999-9999"
            placeholder="Celular"
            inputMode="numeric"
            onChange={(e) => setPhone(e.target.value)}
            onBlur={(e) => verifyPhone(e.target.value)}
            style={{ borderColor: isValidPhone ? '#000' : '#dc2626' }}
            required
          />
          {!isValidPhone && <span className="invalid">Número inválido</span>}

          <ButtonContainer>
            <span>Total: R${price * participants}</span>
            <button>Ir para o pagamento</button>
          </ButtonContainer>
        </Form>
      </FormContainer>
    </Container>
  )
}
