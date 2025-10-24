import './App.css'
import { useState } from 'react'
import { Banner } from './Components/Banner'
import { NavBar } from './Components/NavBar'
import { Subscribe } from './Components/Subscribe'

function App() {
  const [isSubscribe, setIsSubscribe] = useState(false)

  function subscribe() {
    setIsSubscribe(isSubscribe => !isSubscribe)
  }

  function logon() {
    setIsSubscribe(isSubscribe => !isSubscribe)
  }

  return (
    <>
        <NavBar />
        {
          isSubscribe ? (<Subscribe onClick={subscribe} />) : (<Banner onClick={logon} />)
        }
    </>
  )
}

export default App
