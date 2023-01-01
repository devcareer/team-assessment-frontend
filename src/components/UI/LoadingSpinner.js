import classes from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
  return (
    <div className={classes.container}>
      <div className={classes.square}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
