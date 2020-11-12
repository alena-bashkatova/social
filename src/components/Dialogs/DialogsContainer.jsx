import React from 'react';
import {udateNewMessageTextActionCreator, addMessageActionCreator} from '../../redux/dialogs-reduser';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  let state = props.store.getState().messagesPage;

  let addMessage = () => { 
    props.store.dispatch(addMessageActionCreator());
  };

  let onTextMessageChange = (text) => {
    props.store.dispatch(udateNewMessageTextActionCreator(text));
  }

  return <Dialogs udateNewMessageText={onTextMessageChange} 
                  addMessage={addMessage}
                  messagesPage={state}/>;
}

export default DialogsContainer;