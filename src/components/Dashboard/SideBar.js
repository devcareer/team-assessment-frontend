import { useState } from "react";
import dashboard from "../../assets/dashboard.svg";
import dashboardColor from "../../assets/dashboardColor.svg";
import assessments from "../../assets/assessments.svg";
import notification from "../../assets/notification.svg";
import logout from "../../assets/logout.svg";

import classes from "./SideBar.module.css";

const SideBar = () => {
  // const [visited, setVisited] = useState(false);

  // const handleClick = (e) => {
  //   // const active = e.target;
  //   // if (active) {
  //   //   setVisited(true);
  //   //   return;
  //   // }

  //   console.log("clicked");
  // };

  return (
    <div className={classes.sidebar}>
      <div className={classes.navigate}>
        <a
          href="#"
          // onClick={handleClick}
          // id="1"
          className={classes.link}
        >
          <img src={dashboard} alt="" />
          <p>Dashboard</p>
        </a>
        <a
          href="#"
          // onClick={handleClick}
          // id="2"
          className={classes.link}
        >
          <img src={assessments} alt="" />
          <p>Assessments</p>
        </a>
        <a
          href="#"
          // onClick={handleClick}
          // id="3"
          className={classes.link}
        >
          <img src={notification} alt="" />
          <p>Notifications</p>
        </a>
      </div>

      <div className={classes["log-out"]}>
        <a href="#" className={classes.link}>
          <img src={logout} alt="" />
          <p>Log out</p>
        </a>
      </div>
    </div>
  );
};

export default SideBar;
