import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profile-reducer';
import Wall from './Wall';

let mapStateToProps = (state) => {
    return {
        posts: state.profile.posts
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (postText) => {
            dispatch(addPostActionCreator(postText));
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}

const WallContainer = connect(mapStateToProps, mapDispatchToProps) (Wall);

export default WallContainer;