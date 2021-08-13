import React from 'react';
import Post from './Post/Post';
import style from './Wall.module.css';

function Wall(props) {
    let posts = props.posts.map(post => <Post key={post.id} post_text={post.post_text} likes={post.likes}/>)
    
    let newPostInfo = React.createRef();
    let createPost = () => {
        let text = newPostInfo.current.value;
        props.addPost(text);
    }
    
    return (
        <div className={style.wall}>
            <div className={style.submit_box}>
                <textarea ref={newPostInfo} name="postText" className={style.submit_area} placeholder='Введите текст!'></textarea>
                <button className={style.submit_button} type='submit' onClick={ createPost }>Жмяк</button>
            </div>
            {
                posts
            }
        </div>
    );
}

export default Wall;