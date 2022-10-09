import { useRouter } from 'next/router';
import { Steps } from '../Steps';
import { HeaderContainer } from './styled';

export const Header = () => {
  const { pathname } = useRouter();

  return (
    <>
      <HeaderContainer>Conferência Crescer</HeaderContainer>
      {pathname !== '/admin' && <Steps />}
    </>
  );
};
