import React from 'react';
import Content from '../components/Home/Content';
import NavBar from '../components/Home/NavBar';
import SideBar from '../components/Home/SideBar';

import classes from './Home.module.css';

function Home() {
  return (
    <div className={classes.dashboard}>
      <nav className={classes.navbar}>
        <NavBar />
      </nav>
      <div className={classes.sidebar}>
        <SideBar />
      </div>
      <main className={classes.content}>
        <Content />
      </main>
    </div>
  );
}

export default Home;
