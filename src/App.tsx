import './App.css'
import { useState } from 'react'
import { Home } from './components/Home'
import { NavBar } from './components/NavBar'
import { Subscribe } from './components/Subscribe'
import { useMediaQuery } from 'react-responsive';

function App() {
  const [isSubscribe, setIsSubscribe] = useState(false)
  const isMobile = useMediaQuery({ query: `(min-width: 1140px)` });

  function changeStepSubscribe() {
    setIsSubscribe(isSubscribe => !isSubscribe)
  }

  return (
    <>
        <NavBar />
        {
          isSubscribe ? (<Subscribe isMobile={isMobile} changeStepSubscribe={changeStepSubscribe} />) : (<Home changeStepSubscribe={changeStepSubscribe} />)
        }
    </>
  )
}

export default App
