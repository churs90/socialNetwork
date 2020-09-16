import {combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePageReducer";
import dialogPageReducer from "./dialogPageReducer";
import sidebarPageReducer from "./sidebarPageReducer";
import userPageReducer from "./userPageReducer";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogPage: dialogPageReducer,
    sidebarPage: sidebarPageReducer,
    userPage: userPageReducer
})

let store = createStore(reducers);

export default store;