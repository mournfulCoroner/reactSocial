import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import appReducer from "./reducers/app-reducer";
import authReducer from "./reducers/auth-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import friendBarReducer from "./reducers/friendBar-reducer";
import profileReducer from "./reducers/profile-reducer";
import usersReducer from "./reducers/users-reducer";

let reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    friendBar: friendBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;