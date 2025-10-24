import './App.css'
import { useState } from 'react'
import { Banner } from './Components/Banner'
import { NavBar } from './Components/NavBar'
import { Subscribe } from './Components/Subscribe'

function App() {
  const [isSubscribe, setIsSubscribe] = useState(false)

  function changeStepSubscribe() {
    setIsSubscribe(isSubscribe => !isSubscribe)
  }

  return (
    <>
        <NavBar />
        {
          isSubscribe ? (<Subscribe changeStepSubscribe={changeStepSubscribe} />) : (<Banner changeStepSubscribe={changeStepSubscribe} />)
        }
    </>
  )
}

export default App
