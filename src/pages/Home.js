import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/Home/NavBar';
import SideBar from '../components/Home/SideBar';

import classes from './Home.module.css';

function Home(props) {
  return (
    <div className={classes.dashboard}>
      <nav className={classes.navbar}>
        <NavBar />
      </nav>
      <div className={classes.sidebar}>
        <SideBar notify={props.notify} />
      </div>
      <main className={classes.content}>
        <Outlet />
      </main>
    </div>
  );
}

export default Home;
