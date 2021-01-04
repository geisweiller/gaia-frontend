import './index.scss'
import logo from '../../assets/svg/logo/logo.svg';
import avatar from '../../assets/svg/icon/avatar.svg';
import config from '../../assets/svg/icon/config.svg';
import theme from '../../assets/svg/icon/theme.svg';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='wrapper'>
      <Link to='/'>
        <img src={logo} alt='Grupo Gaia'></img>
      </Link>
      <div className='menu'>
        <p>Nome do usuário</p>
        <Link to='/'>
          <img src={avatar} alt='Avatar'></img>
        </Link>
        <Link to='/'style={{background: '#4D9AD4'}}>
          <img src={config} alt='Config' ></img>
        </Link>
        <Link  to='/'>
          <img src={theme} alt='Theme'></img>
        </Link>
      </div>
    </div>
  )
}
