import { headerAPI, loginAPI } from "../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: action.isAuth
            }
        default:
            return state;
    }

}

export const setAuthUserData = (data, isAuth) => ({ type: SET_AUTH_USER_DATA, data, isAuth });

export const getAuth = () => {
    return (dispatch) => {
        headerAPI.getAuth().then((data) => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(data.data, true));
            }
        })
    }
}

export const getAuthorized = (authData) => {
    return (dispatch) => {
        loginAPI.getAuthorized(authData).then((data) => {
            if (data.resultCode === 0) {
                dispatch(getAuth());
            }
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        loginAPI.logout().then((data) => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData({id: null, email: null,login: null}, false));
            }
        })
    }
}


export default authReducer;