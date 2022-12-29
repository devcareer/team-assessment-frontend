import { useState } from 'react';
import classes from './NavBar.module.css';

import logo from '../../assets/logo.png';
import search from '../../assets/Search.svg';
import menu from '../../assets/menu.svg';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className={classes.navbar}>
      <img className={classes.logo} src={logo} alt="logo" />
      <div className={classes.search}>
        <input type="search" placeholder="Search something" />
        <img src={search} alt="" />
      </div>
      <div className={classes.user} onClick={handleClick}>
        <p>NC</p>
        <img src={menu} alt="" />

        {dropdown && (
          <ul className={classes.dropdown}>
            <li>
              <Link>My Profile</Link>
            </li>
            <li>
              <Link>Settings</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavBar;
