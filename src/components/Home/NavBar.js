import classes from './NavBar.module.css';

import logo from '../../assets/logo.png';
import search from '../../assets/Search.svg';
import menu from '../../assets/menu.svg';

const NavBar = () => {
  return (
    <div className={classes.navbar}>
      <img className={classes.logo} src={logo} alt="logo" />
      <div className={classes.search}>
        <input type="search" placeholder="Search something" />
        <img src={search} alt="" />
      </div>
      <div className={classes.user}>
        <p>NC</p>
        <img src={menu} alt="" />
        <ul className={classes.dropdown}>
          <li>My Profile</li>
          <li>Settings</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
