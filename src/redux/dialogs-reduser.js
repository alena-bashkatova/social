const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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

const dialogsReduser = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;
        case SEND_MESSAGE:
            let newMessage = {
                id: 4, 
                text: state.newMessageText
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: SEND_MESSAGE});
export const udateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text});

export default dialogsReduser;
