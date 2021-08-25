import React from 'react';
import Post from './Post/Post';
import styles from './Wall.module.css';
import { Formik, Field, Form} from 'formik';
import * as Yup from 'yup';

const WallForm = (props) => {
    return (
        <Formik initialValues={{ postText: '' }}
            validationSchema={
                Yup.object({
                    postText: Yup.string()
                        .max(350)
                        .required()
                })
            }
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    props.addPost(values.postText);
                    values.postText = '';
                    setSubmitting(false);
                }, 400);
            }} >

            {({isSubmitting}) => (
                <Form className={styles.submit_box}>
                    <Field as='textarea' name="postText"
                     className={styles.submit_area} placeholder='Введите текст!'/>
                    
                    <button className={styles.submit_button} type='submit'
                     disabled={isSubmitting}> Жмяк</button>

                </Form>
            )}
        </Formik>
    )
}



function Wall(props) {
    let posts = props.posts.map(post => <Post key={post.id} post_text={post.post_text} likes={post.likes} />)

    return (
        <div className={styles.wall}>
            <WallForm addPost={props.addPost}/>
            {/* <div className={styles.submit_box}>
                <textarea onChange={onChangeNewPost} value={props.newPostText} name="postText" className={styles.submit_area} placeholder='Введите текст!' />
                <button className={styles.submit_button} type='submit' onClick={createPost}>Жмяк</button>
            </div> */}
            {
                posts
            }
        </div>
    );
}

export default Wall;