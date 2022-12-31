import { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';

import Dashboard from '../../assets/dashboard.svg';
import DashboardColor from '../../assets/dashboardColor.svg';

import Assessments from '../../assets/assessments.svg';
import AssessmentsColor from '../../assets/assessmentsColor.svg';

import Notifications from '../../assets/notification.svg';
import NotificationsColor from '../../assets/notificationColor.svg';

import logout from '../../assets/logout.svg';

import classes from './SideBar.module.css';

const SIDE_BAR = [
  { id: 1, icon: Dashboard, iconColor: DashboardColor, label: 'dashboard' },
  {
    id: 2,
    icon: Assessments,
    iconColor: AssessmentsColor,
    label: 'assessments',
  },
  {
    id: 3,
    icon: Notifications,
    iconColor: NotificationsColor,
    label: 'notifications',
  },
];

const SideBar = props => {
  const navLinkStyles = ({ isActive }) => {
    return {
      backgroundColor: isActive ? '#e7fffa' : '',
      borderLeft: isActive ? '0.4rem solid #0a9c7d' : '',
    };
  };

  return (
    <Fragment>
      <nav className={classes.sidebar}>
        <div className={classes.navigate}>
          {SIDE_BAR.map(list => (
            <NavLink to={`${list.label}`} key={list.id} style={navLinkStyles}>
              {({ isActive }) => (
                <div className={classes.link}>
                  <img src={isActive ? list.iconColor : list.icon} alt="" />
                  <p className={classes[isActive ? 'active' : '']}>
                    {list.label}
                    {list.label === 'notifications' &&
                      isActive &&
                      props.notify.length > 0 && (
                        <span>{props.notify.length}</span>
                      )}
                  </p>
                </div>
              )}
            </NavLink>
          ))}
        </div>

        <div className={classes['log-out']}>
          <Link to="/" className={classes.link}>
            <img src={logout} alt="" />
            <p>Log out</p>
          </Link>
        </div>
      </nav>
    </Fragment>
  );
};

export default SideBar;
