import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import navbarStyles from './Navbar.module.css';

const Navbar = () => {
    return (
        <aside>
            <ul className={navbarStyles.nav}>
                <li>
                    <NavLink to="/profile" activeClassName={navbarStyles.active}>
                        Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/messages" activeClassName={navbarStyles.active}>
                        Messages
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/news" activeClassName={navbarStyles.active}>
                        News
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/music" activeClassName={navbarStyles.active}>
                        Music
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/settings" activeClassName={navbarStyles.active}>
                        Settings
                    </NavLink>
                </li>
            </ul>
            <Friends />
        </aside>
    );
  }
  
  export default Navbar;