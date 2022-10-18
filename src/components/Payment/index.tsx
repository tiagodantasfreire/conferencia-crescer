import { FormEvent, useContext, useEffect, useState } from 'react'
import { Checkbox } from 'pretty-checkbox-react'
import { v4 as uuid } from 'uuid'
import { QrCodePix } from 'qrcode-pix'
import Image from 'next/future/image'
import { doc, setDoc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import toast from 'react-hot-toast'
import { ArrowLeft } from 'phosphor-react'

import { FormContext } from '../../context/FormContext'
import {
  ConfirmationPayment,
  CopyButton,
  HowTo,
  PaymentContainer,
} from './styled'

import { ParticipantsContext } from '../../context/ParticipantsContext'
import { db, storage } from '../../services/firebase-config'
import { Container } from 'src/styles/global'
import { Loading } from '../Loading'

export const Payment = () => {
  const { nextStep, lote, price, step } = useContext(FormContext)
  const { participants, numberOfParticipants } = useContext(ParticipantsContext)

  const [moneyPayment, setMoneyPayment] = useState(false)
  const [payedFor, setPayedFor] = useState('')
  const [qrCodeImage, setQrCodeImage] = useState('')
  const [file, setFile] = useState<File | undefined | null>(undefined)
  const [copied, setCopied] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const totalPrice = price * numberOfParticipants
  const totalPriceFormatted = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(totalPrice)

  const qrCodePix = QrCodePix({
    city: 'São Paulo',
    key: '44421076880',
    name: 'Igreja Casa do Pai',
    version: '01',
    message: `Conferência Crescer | ${lote}º Lote | ${numberOfParticipants} ${
      numberOfParticipants === 1 ? 'pessoa' : 'pessoas'
    }`,
    value: totalPrice,
  })

  useEffect(() => {
    qrCodePix.base64().then((res) => setQrCodeImage(res))
  }, [qrCodePix])

  const handleCopy = () => {
    navigator.clipboard.writeText(qrCodePix.payload())

    setCopied(true)

    toast.success('O código foi copiado', {
      duration: 5000,
      position: 'top-center',
      style: {
        background: '#333',
        color: '#FFF',
      },
    })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const uniqueId = uuid()

    setIsLoading(true)

    if (file) {
      const fileRef = ref(storage, `${file?.name + uniqueId}`)
      uploadBytes(fileRef, file).then((file) => {
        getDownloadURL(file.ref).then((url) => {
          const data = {
            ...participants,
            payment: moneyPayment ? `para ${payedFor}` : 'via PIX',
            price: totalPriceFormatted,
            approved: false,
            receipt: url,
          }

          setDoc(doc(db, 'inscritos', uniqueId), data)
          setTimeout(() => {
            nextStep('success')
          }, 3000)
        })
      })
    }

    const data = {
      ...participants,
      payment: moneyPayment ? `para ${payedFor}` : 'via PIX',
      price: totalPriceFormatted,
      approved: false,
    }

    setDoc(doc(db, 'inscritos', uniqueId), data)
    setTimeout(() => {
      nextStep('success')
    }, 3000)
  }

  return (
    <>
      <Container>
        <PaymentContainer>
          {step === 'payment' && (
            <span onClick={() => nextStep('user')}>
              <ArrowLeft size={14} /> Voltar
            </span>
          )}
          <h1>Realize o pagamento</h1>
          <div>
            Inscrição para{' '}
            <span>{`${numberOfParticipants} ${
              numberOfParticipants === 1 ? 'pessoa ' : 'pessoas '
            }`}</span>
            no {lote}º Lote no valor de <span>{totalPriceFormatted}</span>
          </div>
          <HowTo>
            Faça o pagamento através do QR Code ou copie o código abaixo e cole
            na função PIX Copia e Cola no aplicativo do seu banco
          </HowTo>

          <Image
            src={qrCodeImage}
            alt="QR Code de pagamento da inscrição"
            width={250}
            height={250}
          />

          <CopyButton onClick={handleCopy} copied={copied}>
            {copied ? 'Código copiado' : 'Copiar código'}
          </CopyButton>

          <ConfirmationPayment onSubmit={handleSubmit}>
            {moneyPayment === false && (
              <>
                <h2>Insira seu comprovante aqui</h2>
                <input
                  required
                  type="file"
                  onChange={(e) => {
                    e.target.files && setFile(e.target.files[0])
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
                marginBottom: '0.5rem',
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

            <button>Realizar inscrição</button>
          </ConfirmationPayment>
        </PaymentContainer>
      </Container>
      {isLoading && <Loading />}
    </>
  )
}
