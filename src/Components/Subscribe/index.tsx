import './index.css'
import { Button } from '../Button'
import morfologia1 from '../../assets/morfologia-1.png'
import morfologia2 from '../../assets/morfologia-2.png'
import { TextField } from '../TextField'
import { useState } from 'react'
import { object, string, number, ValidationError } from 'yup';

type FormProps = {
  name: string
  profession: string
  phoneNumber: string
  email: string
  income: number | null
  maritalStatus: string
  vehicle: string
}

type SubscribeProps = {
  isMobile: boolean,
  changeStepSubscribe(): void
}

type FormErrors = {
  name?: string
  phoneNumber?: string
  email?: string
}

const formSchema = object({
  name: string().default('').required("Preencha seu nome corretamente."),
  phoneNumber: string().default('').required("Preencha seu telefone corretamente."),
  email: string().default('').email("E-mail precisa ser válido.").required("Preencha seu e-mail corretamente."),
  profession: string().default(''),
  income: number().default(null).nullable(),
  maritalStatus: string().default(''),
  vehicle: string().default(''),
});

export function Subscribe({isMobile, changeStepSubscribe}: SubscribeProps) {
  const [erros, setErros] = useState<FormErrors>({})

  const [form, setForm] = useState<FormProps>({
    name: "",
    profession: "",
    phoneNumber: "",
    email: "",
    income: null,
    maritalStatus: "",
    vehicle: "",
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

  function logon() {
    formSchema.validate( form, { abortEarly: false } )
    .then(() => {
        setErros({
          name: "",
          phoneNumber: "",
          email: ""
        })
      changeStepSubscribe()
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
    <div className='form'>
      {
        isMobile && (<div className='morfologia-left-subscribe'>
        <img src={morfologia1} width={270} />
      </div>)
      }
        <div className='content-subscribe'>
          <TextField label='Seu nome completo *' name="name" text={form.name} placeholder='Digite seu nome aqui' errorMessage={erros.name} onChange={(e) => setForm({...form, name: e.target.value})} onBlur={(e) => validateField('name', e.target.value)} />
          <TextField label='Telefone *' name="phoneNumber" text={form.phoneNumber}  placeholder='Digite seu número de telefone aqui' errorMessage={erros.phoneNumber} onChange={(e) => setForm({...form, phoneNumber: e.target.value})} onBlur={(e) => validateField('phoneNumber', e.target.value)} />
          <TextField label='E-mail *' name="email" text={form.email} errorMessage={erros.email} placeholder='Digite seu email aqui' onChange={(e) => setForm({...form, email: e.target.value})} onBlur={(e) => validateField('email', e.target.value)} />
          <TextField label='Profissão' name="profession" text={form.profession}  placeholder='Digite sua profissão aqui' onChange={(e) => setForm({...form, profession: e.target.value})} onBlur={(e) => validateField('profession', e.target.value)} />
          <TextField label='Renda Familiar' name="income" text={form.income ? form.income.toString() : ""} placeholder='Digite sua renda familiar' onChange={(e) => setForm({...form, income: parseInt(e.target.value, 10)})}/>
          <TextField label='Estado Civil' name="maritalStatus" text={form.maritalStatus} placeholder='Digite seu estado civil' onChange={(e) => setForm({...form, maritalStatus: e.target.value})} onBlur={(e) => validateField('maritalStatus', e.target.value)} />
          <TextField label='Veículo' name="vehicle" text={form.vehicle} onChange={(e) => setForm({...form, vehicle: e.target.value})} placeholder='Digite seu veículo aqui' onBlur={(e) => validateField('vehicle', e.target.value)} />
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
  )
}
