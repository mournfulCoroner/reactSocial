import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

function Header(props) {
  const [isOpenProfileMenu, setIsOpenProfileMenu] = useState(false);
  const [disabledMenu, setDisabledMenu] = useState(false);

  const onClickProfileMenu = () => {
    setIsOpenProfileMenu(!isOpenProfileMenu);
  }

  const onClickLogout = () => {
    setDisabledMenu(true);
    setIsOpenProfileMenu(!isOpenProfileMenu);
    props.logout();
  }

  return (
    <header className={styles.header}>
      <div className={styles.header_block}>
        <NavLink to={ props.isAuth ? `/profile` : '/profile'}>Отчаяние</NavLink>
      </div>
      <div>
        {props.isAuth ? <button onClick={ onClickProfileMenu } className={styles.header_link} disabled={disabledMenu}
          >{props.login}</button> :
          <NavLink className={styles.header_link} to='/login'>Войти</NavLink>}


        <NavLink className={styles.header_link} to='/users'>Пользователи</NavLink>        
        <div className={isOpenProfileMenu ? `${styles.header_profile_menu} ${styles.menu_active}`
        : `${styles.header_profile_menu}`}>
          <button onClick= { onClickLogout } className={styles.header_profile_menu_link}>Выйти</button>
        </div>
      </div>
    </header>
  );
}

export default Header;