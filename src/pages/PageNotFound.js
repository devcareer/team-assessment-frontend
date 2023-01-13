import Back from '../components/UI/Back';
import NavBar from '../components/Home/NavBar';

import classes from './PageNotFound.module.css';
import error from '../assets/error.svg';

const PageNotFound = () => {
  return (
    <>
      <NavBar />
      <div className={classes.body}>
        <Back />
        <h1>Page Not Found!</h1>
        <img className={classes.error} src={error} alt="" />
      </div>
    </>
  );
};

export default PageNotFound;
