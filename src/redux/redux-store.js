import {combineReducers, createStore} from "redux";
import profileReduser from './profile-reduser';
import dialogsReduser from './dialogs-reduser';
import navbarReduser from './navbar-reduser';

let redusers = combineReducers({
    profilePage: profileReduser,
    messagesPage: dialogsReduser
});

let store = createStore(redusers);

export default store;