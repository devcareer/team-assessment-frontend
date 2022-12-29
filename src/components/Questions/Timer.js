import timer from '../../assets/timer.svg';

import classes from './Timer.module.css';

const Timer = () => {
  return (
    <div className={classes.timer}>
      <img src={timer} alt="" />
      <p>TIMER:14:58</p>
    </div>
  );
};

export default Timer;
