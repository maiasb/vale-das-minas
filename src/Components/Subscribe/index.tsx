import './index.css'
import { Button } from '../Button'
import morfologia1 from '../../assets/morfologia-1.png'
import morfologia2 from '../../assets/morfologia-2.png'
import { TextField } from '../TextField'
import { useState } from 'react'

type FormProps = {
  name: string
  profession: string
  phoneNumber: string
  email: string
  income: string
  maritalStatus: string
  vehicle: string
}

type SubscribeProps = {
  changeStepSubscribe(): void
}

export function Subscribe({changeStepSubscribe}: SubscribeProps) {
    const [form, setForm] = useState<FormProps>({
    name: "",
    profession: "",
    phoneNumber: "",
    email: "",
    income: "",
    maritalStatus: "",
    vehicle: "",
  })

  function logon() {
    alert("Cadastro com sucesso!")
    console.log(form)
    changeStepSubscribe()
  }

  return (
    <div className='form'>
      <div className='morfologia-left-subscribe'>
        <img src={morfologia1} width={270} />
      </div>
      <div className='content-subscribe'>
        <div className='textField-subscribe'>
          <label>Seu nome completo*</label>
          <TextField text={form.name} onChange={(e) => setForm({...form, name: e.target.value})}/>
        </div>
        <div className='textField-subscribe'>
          <label>Profissão*</label>
          <TextField text={form.profession} onChange={(e) => setForm({...form, profession: e.target.value})}/>
        </div>
        <div className='textField-subscribe'>
          <label>Telefone*</label>
          <TextField text={form.phoneNumber} onChange={(e) => setForm({...form, phoneNumber: e.target.value})}/>
        </div>
        <div className='textField-subscribe'>
          <label>E-mail</label>
          <TextField text={form.email} onChange={(e) => setForm({...form, email: e.target.value})}/>
        </div>
        <div className='textField-subscribe'>
          <label>Renda Familiar</label>
          <TextField text={form.income} onChange={(e) => setForm({...form, income: e.target.value})}/>
        </div>
        <div className='textField-subscribe'>
          <label>Estado Civil</label>
          <TextField text={form.maritalStatus} onChange={(e) => setForm({...form, maritalStatus: e.target.value})}/>
        </div>
        <div className='textField-subscribe'>
          <label>Veículo*</label>
          <TextField text={form.vehicle} onChange={(e) => setForm({...form, name: e.target.value})}/>
        </div>
      <div className='div-button-subscribe'>
        <Button text="CADASTRAR" onClick={logon} />
      </div>
      </div>
      <div className='morfologia-right-subscribe'>
        <img src={morfologia2} width={270} />
      </div>
    </div>
  )
}
