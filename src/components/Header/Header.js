import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

function Header() {
  return (
    <header className={style.header}>
      <div className={style.header_block}>
        Отчаяние
      </div>
      <div>
        <NavLink className={style.header_link} to='/users'>Пользователи</NavLink>
      </div>
    </header>
  );
}

export default Header;