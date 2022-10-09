import { Checkbox } from 'pretty-checkbox-react';
import { FormEvent, useContext, useEffect, useRef, useState } from 'react';
import { FormContext } from '../../context/FormContext';
import { CheckboxContainer, Form, FormContainer } from './styled';

export const CalendarForm = () => {
  const { nextStep } = useContext(FormContext);
  const [checkAll, setCheckAll] = useState(false);

  const qua = useRef(null);
  const qui = useRef(null);
  const sex = useRef(null);
  const sab = useRef(null);
  const dom = useRef(null);
  const all = useRef(null);

  useEffect(() => {
    if (checkAll) {
      qua.current.checked = true;
      qui.current.checked = true;
      sex.current.checked = true;
      sab.current.checked = true;
      dom.current.checked = true;
      all.current.checked = true;
    }

    if (checkAll === false) {
      qua.current.checked = false;
      qui.current.checked = false;
      sex.current.checked = false;
      sab.current.checked = false;
      dom.current.checked = false;
      all.current.checked = false;
    }
  }, [checkAll]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const selectedDays = {
      qua: qua.current.checked,
      qui: qui.current.checked,
      sex: sex.current.checked,
      sab: sab.current.checked,
      dom: dom.current.checked,
      all: all.current.checked,
    };

    console.log(selectedDays);
    nextStep('payment');
  };

  return (
    <FormContainer>
      <h1>Selecione os dias</h1>

      <Form onSubmit={onSubmit}>
        <CheckboxContainer>
          <Checkbox
            ref={qua}
            variant="fill"
            shape="round"
            disabled={checkAll ? true : false}
          >
            23/Nov - Quarta-Feira
          </Checkbox>
          <Checkbox
            ref={qui}
            variant="fill"
            shape="round"
            disabled={checkAll ? true : false}
          >
            24/Nov - Quinta-Feira
          </Checkbox>
          <Checkbox
            ref={sex}
            variant="fill"
            shape="round"
            disabled={checkAll ? true : false}
          >
            25/Nov - Sexta-Feira
          </Checkbox>
          <Checkbox
            ref={sab}
            variant="fill"
            shape="round"
            disabled={checkAll ? true : false}
          >
            26/Nov - Sábado
          </Checkbox>
          <Checkbox
            ref={dom}
            variant="fill"
            shape="round"
            disabled={checkAll ? true : false}
          >
            27/Nov - Domingo
          </Checkbox>
          <Checkbox
            ref={all}
            variant="fill"
            shape="round"
            onClick={() => setCheckAll(!checkAll)}
          >
            Todos os dias
          </Checkbox>
        </CheckboxContainer>
        <button>Próximo</button>
      </Form>
    </FormContainer>
  );
};
