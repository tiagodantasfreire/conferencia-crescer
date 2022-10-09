import Image from 'next/image';
import { Checkbox } from 'pretty-checkbox-react';
import { FormEvent, useContext, useState } from 'react';

import FirstLoteCode from '../../assets/qrcode-1l.jpeg';
import SecondLoteCode from '../../assets/qrcode-2l.jpeg';
import { FormContext } from '../../context/FormContext';
import { ConfirmationPayment, PaymentContainer } from './styled';

export const Payment = () => {
  const { nextStep } = useContext(FormContext);
  const [isFirstLote, setIsFirstLote] = useState(true);
  const [moneyPayment, setMoneyPayment] = useState(false);
  const [paymentFile, setPaymentFile] = useState<File>();

  const paymentLink = isFirstLote
    ? 'https://nubank.com.br/pagar/fmsrn/AulmuNFFDy'
    : 'https://nubank.com.br/pagar/fmsrn/33sdJhPjnY';

  const paymentQRCode = isFirstLote ? FirstLoteCode : SecondLoteCode;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log(paymentFile);
    nextStep('success');
  };

  return (
    <PaymentContainer>
      <h1>Realize o pagamento</h1>
      <p>
        Faça o pagamento através do QR Code ou no link a baixo e insira o
        comprovante
      </p>
      <a href={paymentLink} target="blank">
        Clique aqui para pagar
      </a>
      <Image src={paymentQRCode} alt="QR Code de pagamento da inscrição" />

      <ConfirmationPayment onSubmit={handleSubmit}>
        {moneyPayment === false && (
          <>
            <h2>Insira seu comprovante aqui</h2>
            <input
              type="file"
              onChange={(e) => {
                if (e.target.files) {
                  setPaymentFile(e.target.files[0]);
                }
              }}
            />
          </>
        )}

        <Checkbox
          onChange={() => setMoneyPayment(!moneyPayment)}
          style={{
            display: 'flex',
            gap: '0.5rem',
            alignItems: 'baseline',
            marginTop: '1rem',
          }}
        >
          Fiz o pagamento em dinheiro
        </Checkbox>
        {moneyPayment && (
          <input type="text" placeholder="Para quem foi pago?" />
        )}

        <button>Próximo</button>
      </ConfirmationPayment>
    </PaymentContainer>
  );
};
