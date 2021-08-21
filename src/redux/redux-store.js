import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendBarReducer from "./friendBar-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    friendBar: friendBarReducer,
    usersPage: usersReducer,
    auth: authReducer});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;