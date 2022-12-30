import { Link } from 'react-router-dom';
import back from '../assets/back.svg';
import bell from '../assets/bell.png';

import classes from './Notifications.module.css';

// const NOTIFICATIONS = [];

const Notifications = () => {
  return (
    <div className={classes.notifications}>
      <div className={classes.header}>
        <Link className={classes.back}>
          <img src={back} alt="" />
          <p>Back</p>
        </Link>
        <p className={classes['header-main']}>Notifications</p>
      </div>
      <div className={classes.body}>
        <img src={bell} alt="bell" />
        <div className={classes.text}>
          <p className={classes['main-text']}>No new notifications</p>
          <p>Check back later</p>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
