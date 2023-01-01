import Back from '../Back';
import NavBar from '../Home/NavBar';

import save from '../../assets/save.svg';

import classes from './Profile.module.css';

const Profile = () => {
  return (
    <div>
      <NavBar />
      <div className={classes.main}>
        <div className={classes.back}>
          <Back />
        </div>
        <div className={classes.sidebar}>
          <p className={classes.header}>Profile</p>
          <p className={classes['profile-picture']}>NC</p>
          <div className={classes.button}>
            <button>Change Profile Picture</button>
          </div>
        </div>
        <div className={classes.forms}>
          <div className={classes['forms-header']}>
            <p>Basic Information</p>
            <div className={classes.save}>
              <img src={save} alt="" />
              <p>Save</p>
            </div>
          </div>
          <div className={classes['forms-body']}>
            <label htmlFor="fullName">
              Full Name
              <input
                type="text"
                placeholder="Nmasinachi Akosua Cliff"
                id="fullName"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
