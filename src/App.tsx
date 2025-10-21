import './App.css'
import LogoValeDasMinas from './assets/vale-das-minas-logo.png'
import { Button } from './components/Button'

function App() {

  return (
    <>
      <img src={LogoValeDasMinas} alt="vale-das-minas-logo" width={500} />
      <h3>Essa é a sua chance de fazer parte desse projeto incrível.</h3>
      <h5>Clique no botão abaixo para ser um dos primeiros a conhecer.</h5>
      <div className='divButton'>
        <Button
          text="Inscreva-se"
        />
        <label>press <strong>Enter</strong></label>
      </div>
    </>
  )
}

export default App
