import style from './Menu.module.css';

function Menu() {
    return (
        <div className={style.menu}>
            <a className={style.menu_block}>p</a>
            <a className={style.menu_block}>m</a>
            <a className={style.menu_block}>n</a>
        </div>
    );
}

export default Menu;