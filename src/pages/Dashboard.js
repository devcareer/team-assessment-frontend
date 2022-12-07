import React from "react";
import Content from "../components/Dashboard/Content";
import NavBar from "../components/Dashboard/NavBar";
import SideBar from "../components/Dashboard/SideBar";

import classes from "./Dashboard.module.css";

function Dashboard() {
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

export default Dashboard;
