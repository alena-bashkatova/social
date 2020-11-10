import { NavLink } from 'react-router-dom';
import dialogItemStyles from './DialogItem.module.css';

const DialogItem = (props) => {

  let path = "/messages/" + props.id;

  return (
    <li className={`${dialogItemStyles.dialog_item} ${dialogItemStyles.active}`}>
      <img src="https://www.flaticon.com/svg/static/icons/svg/147/147144.svg" />
      <NavLink to={path}>{props.name}</NavLink>
    </li>
  );
}

export default DialogItem;