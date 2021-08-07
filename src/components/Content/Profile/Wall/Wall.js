import Post from './Post/Post';
import style from './Wall.module.css';

function Wall() {
    return (
        <div className={style.wall}>
            <div className={style.submit_box}>
                <textarea name="postText" className={style.submit_area} placeholder='Введите текст!'></textarea>
                <button className={style.submit_button} type='submit'>Жмяк</button>
            </div>

            <Post post_text='Данил хомячок' likes='20'/>
            <Post post_text='Или нет???' likes='25'/>
        </div>
    );
}

export default Wall;