import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import friendBarReducer from "./friendBar-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    friendBar: friendBarReducer});

let store = createStore(reducers);

export default store;