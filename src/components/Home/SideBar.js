import { useState } from 'react';
import { Link } from 'react-router-dom';

import Dashboard from '../../assets/dashboard.svg';
import DashboardColor from '../../assets/dashboardColor.svg';

import Assessments from '../../assets/assessments.svg';
import AssessmentsColor from '../../assets/assessmentsColor.svg';

import Notifications from '../../assets/notification.svg';
import NotificationsColor from '../../assets/notificationColor.svg';

import logout from '../../assets/logout.svg';

import classes from './SideBar.module.css';

const SIDE_BAR = {
  list: [
    { id: 1, icon: Dashboard, iconColor: DashboardColor, label: 'Dashboard' },
    {
      id: 2,
      icon: Assessments,
      iconColor: AssessmentsColor,
      label: 'Assessments',
    },
    {
      id: 3,
      icon: Notifications,
      iconColor: NotificationsColor,
      label: 'Notifications',
    },
  ],
};

const SideBar = () => {
  const [selected, setSelected] = useState(1);
  const handleClick = id => {
    setSelected(id);
  };

  return (
    <nav className={classes.sidebar}>
      <ul className={classes.navigate}>
        {selected &&
          SIDE_BAR.list.map(list => (
            <li
              key={list.id}
              className={classes[selected === list.id ? 'selected' : '']}
            >
              <div
                className={classes.link}
                id={list.id}
                onClick={() => handleClick(list.id)}
              >
                <img
                  src={selected === list.id ? list.iconColor : list.icon}
                  alt=""
                />
                <p>
                  {list.label}
                  {list.label === 'Notifications' && selected === list.id && (
                    <span>1</span>
                  )}
                </p>
              </div>
            </li>
          ))}
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

export default SideBar;
