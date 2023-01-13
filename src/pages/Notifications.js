import { Fragment } from 'react';
import bell from '../assets/bell.png';
import Back from '../components/UI/Back';

import classes from './Notifications.module.css';

const Notifications = props => {
  return (
    <div className={classes.notifications}>
      <div className={classes.header}>
        <Back />
        <div className={classes['header-box']}>
          <h1>Notifications</h1>
          {props.notify.length > 0 && (
            <p>Mark All As Read</p>
          )}
        </div>
      </div>
      <div className={classes.body}>
        {props.notify.length === 0 && (
          <Fragment>
            <div className={classes.display}>
            <img src={bell} alt="bell" />
            </div>
            <div className={classes.text}>
              <p className={classes['main-text']}>No new notifications</p>
              <p>Check back later</p>
            </div>
          </Fragment>
        )}
        {props.notify.length > 0 && (
          <Fragment>
            {props.notify.map(notify => (
              <div className={classes.message} key={notify.id}>
                <p>
                  {notify.message} <span>{notify.link}</span>
                </p>
                <div className={classes['message-time']}>
                  <p>{notify.date}</p>
                  <p>{notify.time}</p>
                </div>
              </div>
            ))}
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Notifications;
