import './index.css'
// import whatsappIcon from '../../assets/whatsapp.png'
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
              {/* <a href='https://wa.me/5591982540124?text=Oi%20Vale%20das%20Minas!%20Quero%20saber%20mais%20sobre%20o%20parque!' target='_blank'>
                <img src={whatsappIcon} alt="whatsapp-icon" width={30}/>
              </a> */}
              <a href='https://www.instagram.com/valedasminaspark/' target='_blank'>
                <img src={InstagramIcon} alt="instagram-icon" width={30} />
              </a>
              <a href='mailto:valdasminas6@gmail.com?subject=Contato%20pelo%20site' target='_blank'>
                <img src={EmailIcon} alt="email-icon" width={30}/>
              </a>
            </>
          )
        }
      </div>
    </div>
  )
}
