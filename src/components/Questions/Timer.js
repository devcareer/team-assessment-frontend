import { useState, useEffect, useRef } from 'react';

import clock from '../../assets/timer.svg';

import classes from './Timer.module.css';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(seconds + 1);

      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, minutes]);

  return (
    <div className={classes.timer}>
      <img src={clock} alt="" />
      <p>
        TIMER:{minutes < 10 ? '0' + minutes : minutes}:
        {seconds < 10 ? '0' + seconds : seconds}
      </p>
    </div>
  );
};

export default Timer;
