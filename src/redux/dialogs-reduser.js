const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReduser = (state, action) => {
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
