import './index.css'
import morfologia1 from '../../assets/morfologia-1.png'
import morfologia2 from '../../assets/morfologia-2.png'
import { Button } from "../Button";
import morfologiaBottom from '../../assets/morfologia-mobile.png'
import { useMediaQuery } from 'react-responsive';

type BannerProps = {
  changeStepSubscribe(): void
}

export function Home({ changeStepSubscribe }:BannerProps) {
  const isMobile = useMediaQuery({ query: `(min-width: 900px)` });

  return (
    <div className='home'>
      <div className="banner">
      {
        isMobile && (
          <div className='morfologia-left'>
        <img className='morfologia' src={morfologia1} />
      </div>
        )
      }
      <div className='content'>
        <div className='text'>
          <p className='copy biggest'>O MAIOR PARQUE AQUÁTICO DO
            NORTE DO BRASIL ESTÁ CHEGANDO!</p>
          <p className='copy smallest'>Garanta seu lugar nesse projeto incrível
            e venha viver essa aventura com a gente!</p>
        </div>
      <div className='div-button'>
        <Button text="INSCREVA-SE" onClick={changeStepSubscribe} />
      </div>
      </div>
      {
        isMobile && (
        <div className='morfologia-right'>
          <img className='morfologia' src={morfologia2} />
        </div>
        )
      }
    </div>

    {
        !isMobile &&
        (
          <div className='rodape-banner'>
            <img className='morfologia-bottom' src={morfologiaBottom} width={'90%'} />
          </div>
        )
      }
    </div>
  )
}
