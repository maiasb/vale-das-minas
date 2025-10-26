import './index.css'
import whatsappIcon from '../../assets/whatsapp.png'
import InstagramIcon from '../../assets/instagram.png'
import EmailIcon from '../../assets/email.png'
import LogoValeDasMinas from '../../assets/vale-das-minas-logo.png'

type NavBarProps = {
  isMobile: boolean
}

export function NavBar({isMobile}: NavBarProps) {
  return (
    <div className='NavBar'>
      <div className='LeftBar'>
        <img src={LogoValeDasMinas} alt="vale-das-minas-logo" width={150} />
      </div>
      <div className='RightBar'>
        {
          isMobile && (
            <>
              <a href='#' target='_blank'>
          <img src={whatsappIcon} alt="whatsapp-icon" width={40}/>
        </a>
        <a href='#' target='_blank'>
          <img src={InstagramIcon} alt="instagram-icon" width={40} />
        </a>
        <a href='#' target='_blank'>
          <img src={EmailIcon} alt="email-icon" width={40}/>
        </a>
            </>
          )
        }
      </div>
    </div>
  )
}
