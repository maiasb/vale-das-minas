import './index.css'
import { Button } from '../../components/Button'
import morfologia1 from '../../assets/morfologia-1.png'
import morfologia2 from '../../assets/morfologia-2.png'
import { TextField } from '../../components/TextField'
import { useState } from 'react'
import { object, string, number, ValidationError } from 'yup';
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
}

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
  const [form, setForm] = useState<FormProps>({
    nome: "",
    profissao: "",
    telefone: "",
    email: "",
    renda: null,
    estado: "",
    veiculo: "",
  })

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
          email: ""
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

  return (
        <div className='subscribe'>
          <div className='form'>
        {
          isMobile && (<div className='morfologia-left-subscribe'>
          <img src={morfologia1} width={270} />
        </div>)
        }
          <div className='content-subscribe'>
            <div className='div-content-subscribe'>
              <div className='div-content-subscribe-part'>
                <TextField label='Seu nome completo *' name="name" text={form.nome} placeholder='Digite seu nome aqui' errorMessage={erros.nome} onChange={(e) => setForm({...form, nome: e.target.value})} onBlur={(e) => validateField('nome', e.target.value)} />
                <TextField label='Telefone *' name="phoneNumber" text={form.telefone}  placeholder='Digite seu número de telefone aqui' errorMessage={erros.telefone} onChange={(e) => setForm({...form, telefone: e.target.value})} onBlur={(e) => validateField('telefone', e.target.value)} />
                <TextField label='E-mail *' name="email" text={form.email} errorMessage={erros.email} placeholder='Digite seu email aqui' onChange={(e) => setForm({...form, email: e.target.value})} onBlur={(e) => validateField('email', e.target.value)} />
              </div>
              <div className='div-content-subscribe-part last'>
                <TextField label='Renda Familiar' name="income" text={form.renda ? form.renda.toString() : ""} placeholder='Digite sua renda familiar' onChange={(e) => setForm({...form, renda: parseInt(e.target.value, 10)})}/>
                <TextField label='Estado Civil' name="maritalStatus" text={form.estado} placeholder='Digite seu estado civil' onChange={(e) => setForm({...form, estado: e.target.value})} onBlur={(e) => validateField('estado', e.target.value)} />
                <TextField label='Veículo' name="vehicle" text={form.veiculo} onChange={(e) => setForm({...form, veiculo: e.target.value})} placeholder='Digite seu veículo aqui' onBlur={(e) => validateField('veiculo', e.target.value)} />
              </div>
            </div>

          <TextField label='Profissão' name="profession" text={form.profissao}  placeholder='Digite sua profissão aqui' onChange={(e) => setForm({...form, profissao: e.target.value})} onBlur={(e) => validateField('profissao', e.target.value)} />

          <div className='div-button-subscribe'>
            <Button text="CADASTRAR" onClick={logon} />
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
