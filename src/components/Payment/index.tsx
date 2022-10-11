import { Checkbox } from 'pretty-checkbox-react';
import { FormEvent, useContext, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { FormContext } from '../../context/FormContext';
import { ConfirmationPayment, PaymentContainer } from './styled';

import { QrCodePix } from 'qrcode-pix';
import Image from 'next/future/image';
import { ParticipantsContext } from '../../context/ParticipantsContext';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../services/firebase-config';

export const Payment = () => {
  const { nextStep, lote, price } = useContext(FormContext);
  const { participants, numberOfParticipants } =
    useContext(ParticipantsContext);
  const [moneyPayment, setMoneyPayment] = useState(false);
  const [payedFor, setPayedFor] = useState('');
  const [qrCodeImage, setQrCodeImage] = useState('');

  const totalPrice = price * numberOfParticipants;
  const totalPriceFormatted = Intl.NumberFormat('pt-BR').format(totalPrice);

  const qrCodePix = QrCodePix({
    city: 'São Paulo',
    key: '+5511964152205',
    name: 'Igreja Casa do Pai',
    version: '01',
    message: 'Conferência Crescer | 1º Lote',
    value: totalPrice,
  });

  useEffect(() => {
    qrCodePix.base64().then((res) => setQrCodeImage(res));
  }, [qrCodePix]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const uniqueId = uuid();

    const data = {
      ...participants,
      payment: moneyPayment ? `para ${payedFor}` : 'via PIX',
      price: `R$${totalPrice}`,
    };

    await setDoc(doc(db, 'inscritos', uniqueId), data);
    nextStep('success');
  };

  return (
    <PaymentContainer>
      <h1>Realize o pagamento</h1>
      <div>
        Inscrição para{' '}
        {`${numberOfParticipants} ${
          numberOfParticipants === 1 ? 'pessoa ' : 'pessoas '
        }`}
        no {lote}º Lote no valor de R${totalPriceFormatted}
      </div>
      <br />
      <p>
        Faça o pagamento através do QR Code ou copie o código abaixo e cole na
        função PIX Copia e Cola no aplicativo do seu banco
      </p>
      <button
        onClick={() => navigator.clipboard.writeText(qrCodePix.payload())}
      >
        Copiar código PIX
      </button>

      <Image
        src={qrCodeImage}
        alt="QR Code de pagamento da inscrição"
        width={250}
        height={250}
      />

      <ConfirmationPayment onSubmit={handleSubmit}>
        {moneyPayment === false && (
          <>
            <h2>Insira seu comprovante aqui</h2>
            <input required type="file" />
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
          <input
            type="text"
            placeholder="Para quem foi pago?"
            required
            onChange={(e) => setPayedFor(e.target.value)}
          />
        )}

        <button>Próximo</button>
      </ConfirmationPayment>
    </PaymentContainer>
  );
};
