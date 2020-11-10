import headerClasses from './Header.module.css';

const Header = () => {
    return (
        <header>
          <img src="https://cdn.logojoy.com/wp-content/uploads/2018/07/30132621/bare.png"/>
          <ul className={headerClasses.nav}>
            <li><a>Login</a></li>
          </ul>
        </header> 
    );
  }
  
  export default Header;