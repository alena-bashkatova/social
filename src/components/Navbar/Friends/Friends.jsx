import { NavLink } from 'react-router-dom';
import friendsStyles from './Friends.module.css';

const Friends = () => {
    return (
        <div className={friendsStyles.friends}>
            <h3>Friends</h3>
            <ul className={friendsStyles.friends_list}>
                <li>
                    <img src="https://img.pngio.com/png-avatar-108-images-in-collection-page-3-png-avatar-300_300.png" alt=""/>
                    Sasha
                </li>
                <li>
                    <img src="https://img.favpng.com/18/18/18/computer-icons-icon-design-avatar-png-favpng-X29r5WhWMXVYvNsYXkR4iBgwf.jpg" alt=""/>
                    Vasya
                </li>
                <li>
                    <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-369-456321.png" alt=""/>
                    Yulya
                </li>
                <li>
                    <img src="https://img.favpng.com/5/1/21/computer-icons-user-profile-avatar-female-png-favpng-cqykKc0Hpkh65ueWt6Nh2KFvS.jpg" alt=""/>
                    Masha
                </li>
                <li>
                    <img src="https://www.shareicon.net/data/128x128/2016/09/15/829452_user_512x512.png" alt=""/>
                    Ira
                </li>
            </ul>
        </div>
    );
  }
  
  export default Friends;