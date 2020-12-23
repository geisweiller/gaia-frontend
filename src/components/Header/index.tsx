import './index.scss'
import logo from '../../assets/svg/logo/logo.svg';
import avatar from '../../assets/svg/icon/avatar.svg';
import config from '../../assets/svg/icon/config.svg';
import theme from '../../assets/svg/icon/theme.svg';

export default function Header() {
  return (
    <div className='wrapper'>
      <img src={logo} alt='Grupo Gaia'></img>
      <div className='menu'>
        <p>Nome do usuário</p>
        <a href='/'>
          <img src={avatar} alt='Avatar'></img>
        </a>
        <a href='/'style={{background: '#4D9AD4'}}>
          <img src={config} alt='Config' ></img>
        </a>
        <a  href='/'>
          <img src={theme} alt='Theme'></img>
        </a>
      </div>
    </div>
  )
}
