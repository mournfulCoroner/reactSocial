import style from './Header.module.css';

function Header(){
    return (
        <header className={style.header}>
          <div className={style.header_block}>
            Отчаяние
          </div>
        </header>
    );
}

export default Header;