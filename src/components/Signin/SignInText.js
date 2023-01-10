import chrome from '../../assets/chrome.png';
import firefox from '../../assets/firefox.png';
import explorer from '../../assets/explorer.png';

import classes from './SignInText.module.css';

const SignInText = () => {
  return (
    <div className={classes['text-container']}>
      <div className={classes.size}>
        <div className={classes.header}>
          <h1>Give your best shot while answering the questions.</h1>
          <p>Wish you the best in it.</p>
        </div>
        <div className={classes.compatibility}>
          <h2>Browser Compatibility works best with</h2>
          <div className={classes.browsers}>
            <img src={chrome} alt="chrome" />
            <img src={firefox} alt="firefox" />
            <img src={explorer} alt="explorer" />
          </div>
        </div>
        <div className={classes.network}>
          <h2>Network Speed</h2>
          <p>
            Check if you have a decent internet speed. This can be done by
            logging into your email account. A decent internet connection should
            enable you to login within seconds.
          </p>
        </div>
        <p>Keep your password safe, as it would be needed at other times.</p>
      </div>
    </div>
  );
};

export default SignInText;
