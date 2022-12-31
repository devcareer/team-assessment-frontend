import bell from '../assets/bell.png';
import Back from '../components/Back';

import classes from './Notifications.module.css';

const Notifications = props => {
  return (
    <div className={classes.notifications}>
      <div className={classes.header}>
        <Back />
        <div className={classes['header-box']}>
          <p className={classes['header-main']}>Notifications</p>
          {props.notify.length > 0 && (
            <p className={classes['header-sub']}>Mark All As Read</p>
          )}
        </div>
      </div>
      <div className={classes.body}>
        {props.notify.length === 0 && (
          <>
            <img src={bell} alt="bell" />
            <div className={classes.text}>
              <p className={classes['main-text']}>No new notifications</p>
              <p>Check back later</p>
            </div>
          </>
        )}
        {props.notify.length > 0 && (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default Notifications;
