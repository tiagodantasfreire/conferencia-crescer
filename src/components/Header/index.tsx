import { useRouter } from 'next/router';
import { Steps } from '../Steps';
import { HeaderContainer } from './styled';

import { useContext } from 'react';
import { FormContext } from '../../context/FormContext';
import { ArrowLeft } from 'phosphor-react';

export const Header = () => {
  const { pathname } = useRouter();
  const { step, nextStep } = useContext(FormContext);

  return (
    <HeaderContainer>
      <h1>Conferência Crescer</h1>
      {/* {pathname !== '/admin' && <Steps />} */}
      {step === 'payment' && (
        <span onClick={() => nextStep('user')}>
          <ArrowLeft size={16} /> Voltar
        </span>
      )}
      {(step !== 'success' || pathname !== '/admin') && (
        <p>Passo {step === 'user' ? 1 : 2} de 2</p>
      )}
    </HeaderContainer>
  );
};
