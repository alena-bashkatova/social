import profileReduser from './profile-reduser';
import dialogsReduser from './dialogs-reduser';
import navbarReduser from './navbar-reduser';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, text: "It's my fourth post", likeCount: 18},
                {id: 2, text: "It's my third post", likeCount: 15},
                {id: 3, text: "It's my second post", likeCount: 5},
                {id: 4, text: "It's my first post", likeCount: 2}
            ],
            newPostText: 'New post',
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: 'Sasha'},
                {id: 2, name: 'Masha'},
                {id: 3, name: 'Vasya'},
                {id: 4, name: 'Yulya'},
                {id: 5, name: 'Ira'},
                {id: 6, name: 'Katya'}
            ],
            messages: [
                {id: 1, text: 'Hello'},
                {id: 2, text: 'Hi'},
                {id: 3, text: 'how are you?'}
            ],
            newMessageText: 'New message',
        }
    },
    _callSubscriber() {
        console.log('State is changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReduser(this._state.profilePage, action);
        this._state.messagesPage = dialogsReduser(this._state.messagesPage, action);
        //navbarReduser();

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;