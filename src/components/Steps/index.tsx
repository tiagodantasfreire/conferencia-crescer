import { User, Calendar, CreditCard, Check } from 'phosphor-react';
import { StepsContainer } from './styled';

export const Steps = () => {
  return (
    <StepsContainer>
      <User size={32} />
      <Calendar size={32} />
      <CreditCard size={32} />
      <Check size={32} />
    </StepsContainer>
  );
};
