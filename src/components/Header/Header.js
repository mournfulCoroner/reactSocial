import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_block}>
        Отчаяние
      </div>
      <div>
        <NavLink className={styles.header_link} to='/users'>Пользователи</NavLink>
      </div>
    </header>
  );
}

export default Header;