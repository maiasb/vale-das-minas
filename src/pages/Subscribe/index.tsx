import './index.css'
import { Button } from '../../components/Button'
import morfologia1 from '../../assets/morfologia-1.png'
import morfologia2 from '../../assets/morfologia-2.png'
import { TextField } from '../../components/TextField'
import { useState } from 'react'
import { object, string,number, ValidationError } from 'yup';
import morfologiaBottom from '../../assets/morfologia-mobile.png'
import { useMediaQuery } from 'react-responsive'

type FormProps = {
  nome: string
  profissao: string
  telefone: string
  email: string
  renda: number | null
  estado: string
  veiculo: string
}

type FormErrors = {
  nome?: string
  telefone?: string
  email?: string
  renda?: string
  estado?: string
  profissao?: string
  veiculo?: string
}

type MyObjectType = {
  [key: number]: { label: string; name: string, placeholder: string, text: string | number | null, erro?: string};
};

const formSchema = object({
  nome: string().default('').required("Preencha seu nome corretamente."),
  telefone: string().default('').required("Preencha seu telefone corretamente."),
  email: string().default('').email("E-mail precisa ser válido.").required("Preencha seu e-mail corretamente."),
  profissao: string().default(''),
  renda: number().default(null).nullable(),
  estado: string().default(''),
  veiculo: string().default(''),
});

export function Subscribe() {
  const isMobile = useMediaQuery({ query: `(min-width: 1140px)` });
  const [erros, setErros] = useState<FormErrors>({})
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormProps>({
    nome: "",
    profissao: "",
    telefone: "",
    email: "",
    renda: null,
    estado: "",
    veiculo: "",
  })

  function handleChangeStep() {
    formSchema
      .validateAt(FormSteps[step].name, { [FormSteps[step].name]: FormSteps[step].text })
      .then(() => {
        setErros((prev) => ({ ...prev, [FormSteps[step].name]: '' }))
        setStep(e => e + 1)
      })
      .catch((error: ValidationError) => {
        setErros((prev) => ({ ...prev, [FormSteps[step].name]: error.message }))
      })
  }

  function validateField(fieldName: keyof FormProps, value: string | number | null) {
    formSchema
      .validateAt(fieldName, { [fieldName]: value })
      .then(() => {
        setErros((prev) => ({ ...prev, [fieldName]: '' }))
      })
      .catch((error: ValidationError) => {
        setErros((prev) => ({ ...prev, [fieldName]: error.message }))
      })
  }

  function sendForm() {
    console.log(form)
    const response = fetch("https://n8n.fehshop.com/webhook/pag-nova", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });

    alert("Cadastro realizado com sucesso!")

    return response;
  }

  function logon() {
    formSchema.validate( form, { abortEarly: false } )
    .then(() => {
        setErros({
          nome: "",
          telefone: "",
          email: "",
          renda: "",
          estado: "",
          veiculo: "",
          profissao: "",
        })
        sendForm()
    })
    .catch((error: ValidationError) => {
    const newErrors: Record<string, string> = {};

    error.inner.forEach((e) => {
      if (e.path) newErrors[e.path] = e.message;
    });

    setErros(newErrors);
  });
  }

  const FormSteps: MyObjectType = {
    0: {
      label: "Nome completo *",
      name: "nome",
      placeholder: "Digite seu nome aqui",
      text: form.nome,
      erro: erros.nome
    },
    1: {
      label: "Telefone *",
      name: "telefone",
      placeholder: "Digite seu telefone aqui",
      text: form.telefone,
      erro: erros.telefone
    },
    2: {
      label: "Email *",
      name: "email",
      placeholder: "Digite seu email aqui",
      text: form.email,
      erro: erros.email
    },
    3: {
      label: "Renda familiar",
      name: "renda",
      placeholder: "Digite sua renda aqui",
      text: form.renda,
      erro: erros.renda
    },
    4: {
      label: "Estado civil",
      name: "estado",
      placeholder: "Digite seu estado civil aqui",
      text: form.estado,
      erro: ""
    },
    5: {
      label: "Veículo",
      name: "veiculo",
      placeholder: "Digite seu veiculo aqui",
      text: form.veiculo,
      erro: ""
    },
    6: {
      label: "Profissão",
      name: "profissao",
      placeholder: "Digite sua profissão",
      text: form.profissao,
      erro: ""
    },
  };

  return (
        <div className='subscribe'>
          <div className='form'>
        {
          isMobile && (<div className='morfologia-left-subscribe'>
          <img src={morfologia1} width={270} />
        </div>)
        }
          <div className='content-subscribe'>
            <TextField
              label={FormSteps[step].label}
              name={FormSteps[step].name}
              text={FormSteps[step].text?.toString() || ''}
              placeholder={FormSteps[step].placeholder} errorMessage={FormSteps[step].erro}
              onChange={(e) =>
                setForm({
                  ...form,
                  [FormSteps[step].name]: e.target.value,
                })}
              onBlur={(e) => validateField(FormSteps[step].name as keyof FormProps, e.target.value)}
            />
          <div className='div-button-subscribe'>
            <Button text={step == 6 ? 'CADASTRAR' : 'AVANÇAR'} onClick={step == 6 ? logon : handleChangeStep} />
          </div>
        </div>
        {
          isMobile && (<div className='morfologia-right-subscribe'>
          <img src={morfologia2} width={270} />
        </div>)
        }
      </div>
      {
        !isMobile &&
        (
          <div className='rodape-banner'>
            <img className='morfologia-bottom-subscribe' src={morfologiaBottom} width={270} />
          </div>
        )
      }
        </div>
  )
}
