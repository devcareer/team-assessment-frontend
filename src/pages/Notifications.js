import { Link, useNavigate } from 'react-router-dom';
import back from '../assets/back.svg';
import bell from '../assets/bell.png';

import classes from './Notifications.module.css';

// const NOTIFICATIONS = [];

const Notifications = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className={classes.notifications}>
      <div className={classes.header}>
        <div onClick={handleClick} className={classes.back}>
          <img src={back} alt="" />
          <p>Back</p>
        </div>
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
