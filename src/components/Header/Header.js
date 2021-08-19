import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

function Header(props) {
  return (
    <header className={styles.header}>
      <div className={styles.header_block}>
        <NavLink to='/profile'>Отчаяние</NavLink>
      </div>
      <div>
        {props.isAuth ? <NavLink className={styles.header_link} to='/profile'>{props.login}</NavLink> : <NavLink className={styles.header_link} to='/login'>Войти</NavLink>}
        <NavLink className={styles.header_link} to='/users'>Пользователи</NavLink>
      </div>
    </header>
  );
}

export default Header;