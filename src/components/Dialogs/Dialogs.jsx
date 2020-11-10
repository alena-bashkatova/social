import React from 'react';
import { NavLink } from 'react-router-dom';
import dialogsStyles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

  let dialogsElems = props.state.dialogs
  .map( dialog => <DialogItem 
    name={dialog.name} 
    id={dialog.id}/> );

  let messagesElems = props.state.messages
  .map( message => <Message 
    message={message.text}/>);

  let newMessageElem = React.createRef();

    let addMessage = () => { 
      let text = newMessageElem.current.value;
      alert(text) 
    };

  return (
    <div className={dialogsStyles.massages_page}>
      <ul className={dialogsStyles.dialogs}>
        {dialogsElems}
      </ul>
      <div className={dialogsStyles.messages_wrapper}>
        <ul className={dialogsStyles.messages}>
          {messagesElems}
        </ul>
        <form>
          <textarea ref={ newMessageElem }></textarea>
          <button onClick={ addMessage }>Add message</button>
        </form>
      </div>
    </div>
  );
}

export default Dialogs;