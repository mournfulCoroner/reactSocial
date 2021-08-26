import { getAuth } from "./auth-reducer";

const INITIALIZE = 'INITIALIZE'


let initialState = {
    isInitialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE:
            return {
                ...state,
                isInitialized: true
            }
        default:
            return state;
    }

}

export const initialize = () => ({ type: INITIALIZE });


export const initSuccess = () => {
    return (dispatch) => {
       let promise = dispatch(getAuth());

       Promise.all([promise]).then(() =>{
            dispatch(initialize())
       }
       )
    }
}


export default appReducer;