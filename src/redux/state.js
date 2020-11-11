const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
            ]
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
        if(action.type === ADD_POST) {
            let newPost = {
                id: 5,
                text: this._state.profilePage.newPostText,
                likeCount: 0
            }
        
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
  
export const udateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default store;
window.store = store;