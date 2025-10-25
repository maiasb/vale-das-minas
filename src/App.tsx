import './App.css'
import { useState } from 'react'
import { Banner } from './Components/Banner'
import { NavBar } from './Components/NavBar'
import { Subscribe } from './Components/Subscribe'
import { useMediaQuery } from 'react-responsive';
import morfologiaBottom from '../src/assets/morfologia-mobile.png'

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
          isSubscribe ? (<Subscribe isMobile={isMobile} changeStepSubscribe={changeStepSubscribe} />) : (<Banner isMobile={isMobile} changeStepSubscribe={changeStepSubscribe} />)
        }
        {
          !isMobile &&
          (
            <div className='rodape-banner'>
              <img className='morfologia-bottom' src={morfologiaBottom} width={270} />
            </div>
          )
        }
    </>
  )
}

export default App
