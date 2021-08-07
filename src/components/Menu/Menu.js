import { NavLink } from 'react-router-dom';
import style from './Menu.module.css';

function Menu() {
    return (

        <div className={style.menu}>
            <NavLink className={style.menu_block} activeClassName={style.active_block} to='/profile'>p</NavLink>
            <NavLink className={style.menu_block} activeClassName={style.active_block} to='/messages'>m</NavLink>
            <a className={style.menu_block} href='/friends'>f</a>
        </div>

    );
}

export default Menu;