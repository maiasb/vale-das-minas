import './App.css'
import { useState } from 'react'
import { Banner } from './Components/Banner'
import { NavBar } from './Components/NavBar'
import { Subscribe } from './Components/Subscribe'

type FormProps = {
  name: string
  profession: string
  phoneNumber: string
  email: string
  income: string
  maritalStatus: string
  vehicle: string
}

function App() {
  const [isSubscribe, setIsSubscribe] = useState(false)
  const [form, setForm] = useState<FormProps>({
    name: "",
    profession: "",
    phoneNumber: "",
    email: "",
    income: "",
    maritalStatus: "",
    vehicle: "",
  })

  function subscribe() {
    setIsSubscribe(!isSubscribe)
  }

  console.log(isSubscribe)
  console.log(form)

  return (
    <>
        <NavBar />
        {
          isSubscribe ? (<Subscribe setForm={setForm} />) : (<Banner onClick={subscribe} />)
        }
    </>
  )
}

export default App
