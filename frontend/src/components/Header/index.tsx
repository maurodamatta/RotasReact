import './styles.css';
import imgHome from '../../assets/home.png';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div className='header-content-container container'>
        <nav className='navbar'>
          <NavLink to="/home" className={({ isActive }) => isActive ? 'items-menu menu-active' : 'items-menu'} >
            Início
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => isActive ? 'items-menu menu-active' : 'items-menu'} >
            Produtos
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'items-menu menu-active' : 'items-menu'} >
            Sobre nós
          </NavLink>
        </nav>
        <div className='image-header'>
          <NavLink to="/">
            <img src={imgHome} alt="Home" />
          </NavLink>
        </div>
      </div>
    </header>
  );
}