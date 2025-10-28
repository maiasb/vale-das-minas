import './index.css'
import whatsappIcon from '../../assets/whatsapp.png'
import InstagramIcon from '../../assets/instagram.png'
import EmailIcon from '../../assets/email.png'
import LogoValeDasMinas from '../../assets/vale-das-minas-logo.png'
import { useMediaQuery } from 'react-responsive';

export function NavBar() {
  const isMobile = useMediaQuery({ query: `(min-width: 700px)` });

  return (
    <div className='NavBar'>
      <div className='LeftBar'>
        <img className='logo' src={LogoValeDasMinas} alt="vale-das-minas-logo" />
      </div>
      <div className='RightBar'>
        {
          isMobile && (
            <>
              <a href='#' target='_blank'>
          <img src={whatsappIcon} alt="whatsapp-icon" width={30}/>
        </a>
        <a href='#' target='_blank'>
          <img src={InstagramIcon} alt="instagram-icon" width={30} />
        </a>
        <a href='#' target='_blank'>
          <img src={EmailIcon} alt="email-icon" width={30}/>
        </a>
            </>
          )
        }
      </div>
    </div>
  )
}
