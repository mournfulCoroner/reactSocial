import { profileAPI } from "../../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_PROFILE_USER = 'SET_PROFILE_USER';
const SET_USER_STATUS = 'SET_USER_STATUS';
const SET_USER_AVATAR = 'SET_USER_AVATAR';
const SET_USER_INFO = 'UPDATE_USER_INFO';

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
    profile: {
        user: null
    },
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let post = {
                id: 6,
                post_text: action.postText,
                likes: 0
            }
            return {
                ...state,
                posts: [post, ...state.posts],
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.textPost
            }

        case SET_PROFILE_USER:
            return { ...state, user: action.user }


        case SET_USER_STATUS:
            return { ...state, status: action.status ? action.status : '' }

        case SET_USER_AVATAR:
            return {...state, user: {...state.user, photos: action.file}}

        case SET_USER_INFO:
            return {...state, user: {...action.user, photos: state.user.photos}}

        default:
            return state;
    }
}

export const addPostActionCreator = (postText) => ({ type: ADD_POST, postText })
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, textPost: text })
export const setProfileUser = (user) => ({ type: SET_PROFILE_USER, user })
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })
export const setUserAvatar = (file) => ({ type: SET_USER_AVATAR, file })
const setUserInfo = (user) => ({type: SET_USER_INFO, user})


export const getUserProfileThunk = (userId) => async (dispatch) => {
    let data = await profileAPI.getUserData(userId)
    dispatch(setProfileUser(data));

    data = await profileAPI.getUserStatus(userId)
    dispatch(setUserStatus(data))
}


export const updateUserStatus = (status) => async (dispatch) => {
    let data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}

export const saveAvatar = (file) => async (dispatch) => {
    let data = await profileAPI.saveAvatar(file)
    if (data.resultCode === 0) {
        dispatch(setUserAvatar(data.data.photos))
    }
}

export const saveUserInfo = (user) => async (dispatch) => {
    let data = await profileAPI.updateUserInfo(user)
    if (data.resultCode === 0) {
        dispatch(setUserInfo(user));
    }
}

export default profileReducer;