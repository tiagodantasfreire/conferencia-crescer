import { FormEvent, useContext, useState, useEffect } from 'react'

import { FormContext } from '../../context/FormContext'

import { getCookie, setCookie } from '../../utils/cookies'
import { LoginContainer } from './styled'

export const LoginPage = () => {
  const { login } = useContext(FormContext)
  const [password, setPassword] = useState('')
  const [wrongPassword, setWrongPassword] = useState(false)

  useEffect(() => {
    const cookie = getCookie('@ConfCrescer:casadopailogin')

    cookie === 'true' && login()
  }, [login])

  const handleLogin = (e: FormEvent) => {
    e.preventDefault()

    if (password === 'admincrescer') {
      setCookie('@ConfCrescer:casadopailogin', 'true')
      login()
    } else {
      setWrongPassword(true)
    }
  }

  return (
    <LoginContainer>
      <h1>Faça seu Login</h1>
      <p>Digite a senha</p>
      <form onSubmit={handleLogin}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {wrongPassword && (
          <p className="wrong">Senha incorreta. Tente novamente</p>
        )}
        <button>Entrar</button>
      </form>
    </LoginContainer>
  )
}
