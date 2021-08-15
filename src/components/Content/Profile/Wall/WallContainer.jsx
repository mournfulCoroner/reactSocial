import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profile-reducer';
import Wall from './Wall';

function WallContainer(props) {

    let state = props.store.getState();

    let onChangeNewPost = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }

    let createPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    return (
        <Wall addPost={createPost} updateNewPostText={onChangeNewPost}
            newPostText={state.profile.newPostText} posts={state.profile.posts} />
    );
}

export default WallContainer;