import { useContext, useEffect } from 'react'
import { ArrowLeft } from 'phosphor-react'

import { HeaderContainer, Navbar } from './styled'
import { FormContext } from '../../context/FormContext'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ParticipantsContext } from 'src/context/ParticipantsContext'

export const Header = () => {
  const { step } = useContext(FormContext)
  const { usersToApprove } = useContext(ParticipantsContext)
  const { pathname } = useRouter()

  return (
    <HeaderContainer step={step}>
      <h1>
        <Link href="/" prefetch={false}>
          Conferência Crescer
        </Link>
      </h1>
      {pathname !== '/' && (
        <Navbar>
          <Link href="/admin">
            <a>Participantes</a>
          </Link>
          <Link href="/aprovar">
            <a>Aprovar pagamentos({usersToApprove.length})</a>
          </Link>
          <Link href="/vagas-restantes">
            <a>Vagas restantes</a>
          </Link>
        </Navbar>
      )}
    </HeaderContainer>
  )
}
