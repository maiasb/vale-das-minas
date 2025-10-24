import { Button } from '../Button'
import morfologia1 from '../../assets/morfologia-1.png'
import morfologia2 from '../../assets/morfologia-2.png'
import './index.css'
import { useState } from 'react'
import { TextField } from '../TextField'

type SubscribeProps = {
  onClick(): void
}

export function Subscribe({onClick}:SubscribeProps) {
    const [name, setName] = useState("")
    const [profession, setProfession] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [income, setIncome] = useState("")
    const [maritalStatus, setMaritalStatus] = useState("")
    const [vehicle, setVehicle] = useState("")

  return (
    <div className='form'>
      <div className='morfologia-left-subscribe'>
        <img src={morfologia1} width={270} />
      </div>
      <div className='content-subscribe'>
        <div className='textField-subscribe'>
          <label>Seu nome completo*</label>
          <TextField text={name} onChange={setName}/>
        </div>
        <div className='textField-subscribe'>
          <label>Profissão*</label>
          <TextField text={profession} onChange={setProfession}/>
        </div>
        <div className='textField-subscribe'>
          <label>Telefone*</label>
          <TextField text={phoneNumber} onChange={setPhoneNumber}/>
        </div>
        <div className='textField-subscribe'>
          <label>E-mail</label>
          <TextField text={email} onChange={setEmail}/>
        </div>
        <div className='textField-subscribe'>
          <label>Renda Familiar</label>
          <TextField text={income} onChange={setIncome}/>
        </div>
        <div className='textField-subscribe'>
          <label>Estado Civil</label>
          <TextField text={maritalStatus} onChange={setMaritalStatus}/>
        </div>
        <div className='textField-subscribe'>
          <label>Veículo*</label>
          <TextField text={vehicle} onChange={setVehicle}/>
        </div>
      <div className='div-button-subscribe'>
        <Button text="CADASTRAR" onClick={onClick} />
      </div>
      </div>
      <div className='morfologia-right-subscribe'>
        <img src={morfologia2} width={270} />
      </div>
    </div>
  )
}
