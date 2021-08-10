import Post from './Post/Post';
import style from './Wall.module.css';

function Wall(props) {
    let posts = props.posts.map(post => <Post key={post.id} post_text={post.post_text} likes={post.likes}/>)
    return (
        <div className={style.wall}>
            <div className={style.submit_box}>
                <textarea name="postText" className={style.submit_area} placeholder='Введите текст!'></textarea>
                <button className={style.submit_button} type='submit'>Жмяк</button>
            </div>
            {
                posts
            }
        </div>
    );
}

export default Wall;