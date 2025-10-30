import './index.css'
import morfologia1 from '../../assets/morfologia-1.png'
import morfologia2 from '../../assets/morfologia-2.png'
import { Button } from "../../components/Button";
import morfologiaBottom from '../../assets/morfologia-mobile.png'
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router'

export function Home() {
  const isMobile = useMediaQuery({ query: `(min-width: 900px)` });
  const navigate = useNavigate()

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
        <Button text="INSCREVA-SE" onClick={() => navigate('/cadastro')} />
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
