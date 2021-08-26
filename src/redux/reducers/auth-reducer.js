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

export const getAuth = () => async (dispatch) => {
    let data = await headerAPI.getAuth()
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(data.data, true));
    }

}


export const getAuthorized = (authData) => async (dispatch) => {
    let data = await loginAPI.getAuthorized(authData)

    if (data.resultCode === 0) {
        dispatch(getAuth());
        dispatch(toggleSuccessAuth(null));
    }
    else {
        dispatch(toggleSuccessAuth(data.messages[0]));
    }

}


export const logout = () => async (dispatch) => {
    let data = await loginAPI.logout()
    if (data.resultCode === 0) {
        dispatch(setAuthUserData({ id: null, email: null, login: null }, false));
    }
}


export default authReducer;