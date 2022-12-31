import { useNavigate } from 'react-router-dom';

import classes from './Back.module.css';

import back from '../assets/back.svg';

const Back = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(-1);
  };

  return (
    <div onClick={clickHandler} className={classes.back}>
      <img src={back} alt="" />
      <p>Back</p>
    </div>
  );
};

export default Back;
