import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

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

const SideBar = () => {
  const [selected, setSelected] = useState(1);
  const handleClick = id => {
    setSelected(id);
  };

  return (
    <Fragment>
      <nav className={classes.sidebar}>
        <ul className={classes.navigate}>
          {selected &&
            SIDE_BAR.map(list => (
              <Link
                to={`${list.label}`}
                key={list.id}
                className={classes[selected === list.id ? 'selected' : '']}
              >
                <div
                  className={classes.link}
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
              </Link>
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
    </Fragment>
  );
};

export default SideBar;
