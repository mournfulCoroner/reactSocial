import React from 'react';
import Post from './Post/Post';
import styles from './Wall.module.css';

function Wall(props) {
    let posts = props.posts.map(post => <Post key={post.id} post_text={post.post_text} likes={post.likes}/>)


    let onChangeNewPost = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    }

    let createPost = () => {
        props.addPost();
    }

    return (
        <div className={styles.wall}>
            <div className={styles.submit_box}>
                <textarea onChange={onChangeNewPost} value = {props.newPostText} name="postText" className={styles.submit_area} placeholder='Введите текст!'/>
                <button className={styles.submit_button} type='submit' onClick={ createPost }>Жмяк</button>
            </div>
            {
                posts
            }
        </div>
    );
}

export default Wall;