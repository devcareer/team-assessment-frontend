import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Content from '../components/Home/Content';
import NavBar from '../components/Home/NavBar';
import SideBar from '../components/Home/SideBar';
import Assessments from './Assessments';
import Dashboard from './Dashboard';

import classes from './Home.module.css';
import Notifications from './Notifications';

function Home() {
  return (
    <div className={classes.dashboard}>
      <nav className={classes.navbar}>
        <NavBar />
      </nav>
      <div className={classes.sidebar}>
        <SideBar>
          <Routes>
            {/* <Route path="/home/dashboard" element={<Dashboard />} />
            <Route path="/home/assessments" element={<Assessments />} />
            <Route path="/home/notifications" element={<Notifications />} /> */}
          </Routes>
        </SideBar>
      </div>
      <main className={classes.content}></main>
    </div>
  );
}

export default Home;
