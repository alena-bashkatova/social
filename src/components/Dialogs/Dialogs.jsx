import React from 'react';
import { NavLink } from 'react-router-dom';
import dialogsStyles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {udateNewMessageTextActionCreator, addMessageActionCreator} from '../../redux/dialogs-reduser';

const Dialogs = (props) => {
  let state = props.store.getState().messagesPage;

  let dialogsElems = state.dialogs
  .map( dialog => <DialogItem 
    name={dialog.name} 
    id={dialog.id}/> );

  let messagesElems = state.messages
  .map( message => <Message 
    message={message.text}/>);

  let newMessageElem = React.createRef();

  let addMessage = () => { 
    props.store.dispatch(addMessageActionCreator());
  };

  let newMessageText = state.newMessageText;

  let onTextMessageChange = (e) => {
    let text = e.target.value;
    props.store.dispatch(udateNewMessageTextActionCreator(text));
  }

  return (
    <div className={dialogsStyles.massages_page}>
      <ul className={dialogsStyles.dialogs}>
        {dialogsElems}
      </ul>
      <div className={dialogsStyles.messages_wrapper}>
        <ul className={dialogsStyles.messages}>
          {messagesElems}
        </ul>
        <div className={dialogsStyles.form}>
          <textarea ref={ newMessageElem } value={newMessageText} onChange={onTextMessageChange}></textarea>
          <button onClick={ addMessage }>Add message</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;