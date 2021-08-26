import { headerAPI, loginAPI } from "../../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
// Убрать потом (или нет) штука для проверки успеха логина
const TOGGLE_SUCCESS_AUTH = 'TOGGLE_SUCCESS_AUTH'


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    successAuth: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: action.isAuth
            }
        case TOGGLE_SUCCESS_AUTH:
            return {
                ...state,
                successAuth: action.successAuth
            }
        default:
            return state;
    }

}

export const setAuthUserData = (data, isAuth) => ({ type: SET_AUTH_USER_DATA, data, isAuth });
export const toggleSuccessAuth = (successAuth) => ({ type: TOGGLE_SUCCESS_AUTH, successAuth })

export const getAuth = () => (dispatch) => {
    return headerAPI.getAuth().then((data) => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(data.data, true));
        }
    })
}


export const getAuthorized = (authData) => (dispatch) => {
    return loginAPI.getAuthorized(authData).then((data) => {
        if (data.resultCode === 0) {
            dispatch(getAuth());
            dispatch(toggleSuccessAuth(null));
             return null;
        }
        else {
            dispatch(toggleSuccessAuth(data.messages[0]));
            return data.messages[0];
        }
    })
}


export const logout = () => {
    return (dispatch) => {
        loginAPI.logout().then((data) => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData({ id: null, email: null, login: null }, false));
            }
        })
    }
}


export default authReducer;