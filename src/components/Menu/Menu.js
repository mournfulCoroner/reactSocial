import { NavLink } from 'react-router-dom';
import styles from './Menu.module.css';

function Menu() {
    return (

        <div className={styles.menu}>
            <NavLink className={styles.menu_block} activeClassName={styles.active_block} to='/profile'>p</NavLink>
            <NavLink className={styles.menu_block} activeClassName={styles.active_block} to='/messages'>m</NavLink>
            <a className={styles.menu_block} href='/friends'>f</a>
        </div>

    );
}

export default Menu;