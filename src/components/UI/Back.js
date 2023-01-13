import { useNavigate } from 'react-router-dom';

import classes from './Back.module.css';

import back from '../../assets/back.svg';

const Back = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(-1);
  };

  return (
    <div className={classes.back}>
      <button onClick={clickHandler}>
        <img src={back} alt="" />
        <p>Back</p>
      </button>
    </div>
  );
};

export default Back;
