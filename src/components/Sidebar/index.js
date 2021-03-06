import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-n.png'
import LogoSubtitle from '../../assets/images/logo_subn.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedin, faSkype, faYoutube } from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => {
  return (
    <div className='nav-bar'>
      <Link className='logo' to='/'>
        <img src={LogoS} alt='logo' />
        
      </Link>

      <nav>
        <NavLink exact='true' activeclassname="active" to='/'>
          <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
        </NavLink>
        <NavLink exact='true' activeclassname="active" className='about-link' to='/about'>
          <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
        </NavLink>
        <NavLink exact='true' activeclassname="active" className='contact-link' to='/contact'>
          <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
        </NavLink>
      </nav>
      <ul>
      <li>
          <a target='_blank' rel='noreferrer' href='https://www.facebook.com/dam.nam.bb/'>
            <FontAwesomeIcon icon={faFacebook} color='#4d4d4e' />
          </a>
        </li>
        <li>
          <a target='_blank' rel='noreferrer' href='https://www.facebook.com/dam.nam.bb/'>
            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
          </a>
        </li>
        <li>
          <a target='_blank' rel='noreferrer' href='https://www.facebook.com/dam.nam.bb/'>
            <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
          </a>
        </li>
        <li>
          <a target='_blank' rel='noreferrer' href='https://www.facebook.com/dam.nam.bb/'>
            <FontAwesomeIcon icon={faYoutube} color='#4d4d4e' />
          </a>
        </li>
        
        
      </ul>
    </div>

  )


}
export default Sidebar