import './index.css'
import morfologia1 from '../../assets/morfologia-1.png'
import morfologia2 from '../../assets/morfologia-2.png'
import { Button } from "../Button";

type BannerProps = {
  isMobile: boolean,
  changeStepSubscribe(): void
}

export function Banner({isMobile, changeStepSubscribe}:BannerProps) {
  return (
    <div className="banner">
      {
        isMobile && (
          <div className='morfologia-left'>
        <img src={morfologia1} width={270} />
      </div>
        )
      }
      <div className='content'>
        <div className='text'>
          <label className='copy biggest'>O MAIOR PARQUE AQUÁTICO DO
            NORTE DO BRASIL ESTÁ CHEGANDO!</label>
          <label className='copy smallest'>Garanta seu lugar nesse projeto incrível
            e venha viver essa aventura com a gente!</label>
        </div>
      <div className='div-button'>
        <Button text="INSCREVA-SE" onClick={changeStepSubscribe} />
      </div>
      </div>
      {
        isMobile && (
          <div className='morfologia-right'>
        <img src={morfologia2} width={270} />
      </div>
        )
      }
    </div>
  )
}
