import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './Submit.module.css';
import doodle from '../../assets/doodle.png';
import sad from '../../assets/sad.svg';
import satisfactory from '../../assets/satisfactory.svg';
import happy from '../../assets/happy.svg';

const Submit = () => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const changeHandler = e => {
    setCount(e.target.value.length);
  };

  const clickHandler = () => {
    navigate('/home/dashboard');
  };

  return (
    <div className={classes.submit}>
      <div className={classes.button}>
        <button onClick={clickHandler}>Return to Dashboard</button>
      </div>
      <div className={classes.body}>
        <img src={doodle} alt="doodle" className={classes.doodle} />
        <p>Congratulations! You&rsquo;ve completed the assessment</p>
        <p className={classes.score}>Your Score: 45/50</p>
        <p className={classes.rating}>How was your test experience?</p>
        <form>
          <input type="radio" id="sad" name="rating" value="sad" />
          <label htmlFor="sad">
            <img src={sad} alt="" />
          </label>
          <input
            type="radio"
            id="satisfactory"
            name="rating"
            value="satisfactory"
          />
          <label htmlFor="satisfactory">
            <img src={satisfactory} alt="" />
          </label>
          <input type="radio" id="happy" name="rating" value="happy" />
          <label htmlFor="happy">
            <img src={happy} alt="" />
          </label>
        </form>
      </div>
      <p>
        Feedback <span>(Optional)</span>
      </p>
      <textarea
        name=""
        id=""
        cols="30"
        rows="7"
        placeholder="Write your comment"
        maxLength="250"
        onChange={changeHandler}
      ></textarea>
      <div className={classes['text-count']}>
        <span>{count}/250</span>
      </div>
    </div>
  );
};

export default Submit;
