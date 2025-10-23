import './index.css'
import morfologia1 from '../../assets/morfologia-1.png'
import morfologiaPart from '../../assets/morfologia-part-1.png'
import morfologia2 from '../../assets/morfologia-2.png'
import morfologiaPart2 from '../../assets/morfologia-part-2.png'
import { Button } from "../Button";

export function Banner() {
  return (
    <div className="banner">
      <div className='morfologia-left'>
        <img className='morfologia-rotate' src={morfologia1} width={250} />
        <img className='morfologiaPart' src={morfologiaPart} width={120} />
      </div>
      <div className='content'>
        <div className='text'>
          <h3>O MAIOR PARQUE AQUÁTICO DO
            NORTE DO BRASIL ESTÁ CHEGANDO!</h3>
          <h5>Garanta seu lugar nesse projeto incrível
            e venha viver essa aventura com a gente!</h5>
        </div>
      <div className='divButton'>
        <Button
          text="Inscreva-se"
        />
      </div>
      </div>
      <div className='morfologia-right'>
        <img src={morfologia2} width={320} />
        <img className='morfologia-rotate' src={morfologiaPart2} width={130} />
      </div>
    </div>
  )
}
