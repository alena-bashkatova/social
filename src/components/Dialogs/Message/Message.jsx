import { NavLink } from 'react-router-dom';
import messageStyles from './Message.module.css';

const Message = (props) => {
  return (
    <li className={messageStyles.message}>
      <img src="https://www.flaticon.com/svg/static/icons/svg/147/147144.svg" alt=""/>
      {props.message}
    </li>
  );
}

export default Message;