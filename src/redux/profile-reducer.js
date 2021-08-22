import { profileAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_PROFILE_USER = 'SET_PROFILE_USER';
const SET_USER_STATUS = 'SET_USER_STATUS';

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
    profile: null,
    status: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let post = {
                id: 6,
                post_text: state.newPostText,
                likes: 0
            }
            return {
                ...state,
                posts: [post, ...state.posts],
                newPostText: ''
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.textPost
            }

        case SET_PROFILE_USER:
            return { ...state, user: action.user }


        case SET_USER_STATUS:
            return { ...state, status: action.status }

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, textPost: text })
export const setProfileUser = (user) => ({ type: SET_PROFILE_USER, user })
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })

export const getUserProfileThunk = (userId) => {
    return (dispatch) => {
        profileAPI.getUserData(userId).then((data) => {
            dispatch(setProfileUser(data));
        });
        profileAPI.getUserStatus(userId).then((data) => {
            dispatch(setUserStatus(data))
        })
    }
}

export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then((data) => {
        if (data.resultCode === 0) {
            dispatch(setUserStatus(status))
        }
    })
}

export default profileReducer;