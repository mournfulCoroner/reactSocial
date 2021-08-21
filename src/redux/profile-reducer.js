import { profileAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_PROFILE_USER = 'SET_PROFILE_USER';

let initialState = {
    posts: [
        {
            id: 1,
            post_text: 'Данил хомячок',
            likes: 20
        },
        {
            id: 2,
            post_text: 'Или нет??',
            likes: 25
        }
    ],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: 
            let post = {
                id: 6,
                post_text: state.newPostText,
                likes: 0
            }
            return {...state,
                posts: [post, ...state.posts],
                newPostText: ''
            };

        case UPDATE_NEW_POST_TEXT: 
            return {...state,
            newPostText: action.textPost
        }

        case SET_PROFILE_USER:
            return {...state, user: action.user}

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, textPost: text })
export const setProfileUser = (user) => ({type: SET_PROFILE_USER, user})

export const getUserProfileThunk = (userId) => {
    return (dispatch) => {
        profileAPI.getUserData(userId).then((data) => {
           dispatch(setProfileUser(data));
        })
    }
}

export default profileReducer;