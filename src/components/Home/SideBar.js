// import { useState } from "react";
import Dashboard from '../../pages/Home';
import Assessments from '../../pages/Assessments';
import Notifications from '../../pages/Notifications';
import dashboard from '../../assets/dashboard.svg';
// import dashboardColor from "../../assets/dashboardColor.svg";
import assessments from '../../assets/assessments.svg';
import notification from '../../assets/notification.svg';
import logout from '../../assets/logout.svg';

import classes from './SideBar.module.css';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const SideBar = () => {
  return (
    <nav className={classes.sidebar}>
      <ul className={classes.navigate}>
        <CustomLink to="/home/dashboard">
          <div className={classes.link}>
            <img src={dashboard} alt="" />
            <p>Dashboard</p>
          </div>
        </CustomLink>
        <CustomLink to="/home/assessments">
          <div className={classes.link}>
            <img src={assessments} alt="" />
            <p>Assessments</p>
          </div>
        </CustomLink>
        <CustomLink to="/home/notifications">
          <div className={classes.link}>
            <img src={notification} alt="" />
            <p>Notifications</p>
          </div>
        </CustomLink>
      </ul>

      <ul className={classes['log-out']}>
        <li>
          <Link to="/" className={classes.link}>
            <img src={logout} alt="" />
            <p>Log out</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? classes.active : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
};

// return (
//   <nav className={classes.sidebar}>
//     <ul className={classes.navigate}>
//       <li>
//         <Link to="/home" className={classes.link}>
// <img src={dashboard} alt="" />
//           <p>Dashboard</p>
//         </Link>
//       </li>
//       <li>
//         <Link to="/home/assessments" className={classes.link}>
//           <img src={assessments} alt="" />
//           <p>Assessments</p>
//         </Link>
//       </li>
//       <li>
//         <Link to="/home/notifications" className={classes.link}>
//           <img src={notification} alt="" />
//           <p>Notifications</p>
//         </Link>
//       </li>
//     </ul>

// <ul className={classes['log-out']}>
//   <li>
//     <Link to="/" className={classes.link}>
//       <img src={logout} alt="" />
//       <p>Log out</p>
//     </Link>
//   </li>
// </ul>
//   </nav>
// );

export default SideBar;
