import { Fragment } from 'react';
import Back from '../components/UI/Back';
import NavBar from '../components/Home/NavBar';

import classes from './PageNotFound.module.css';
import error from '../assets/error.svg';

const PageNotFound = () => {
  return (
    <Fragment>
      <NavBar />
      <div className={classes.body}>
        <Back />
        <div className={classes.main}>
          <h1>Page Not Found!</h1>
          <img src={error} alt="" />
        </div>
      </div>
    </Fragment>
  );
};

export default PageNotFound;
