import { useState } from 'react';

import Back from '../Back';
import NavBar from '../Home/NavBar';

import save from '../../assets/save.svg';

import classes from './Profile.module.css';

const Profile = () => {
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [track, setTrack] = useState('');

  const handleChangeGender = e => {
    setGender(e.target.value);
  };

  const handleChangeCountry = e => {
    setCountry(e.target.value);
  };

  const handleChangeState = e => {
    setState(e.target.value);
  };

  const handleChangeTrack = e => {
    setTrack(e.target.value);
  };

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
            <label htmlFor="email">
              Email Address
              <input
                type="email"
                placeholder="nmasinaclif@gmail.com"
                id="email"
              />
            </label>
            <label htmlFor="gender">
              Gender
              <select value={gender} id="gender" onChange={handleChangeGender}>
                <option disabled={true} hidden value="">
                  Select an option
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>
            <label htmlFor="phone-number">
              Phone Number
              <input
                type="tel"
                placeholder="e.g. +234 8045195342"
                id="phone-number"
              />
            </label>
            <label htmlFor="country">
              Country
              <select
                value={country}
                id="country"
                onChange={handleChangeCountry}
              >
                <option disabled={true} hidden value="">
                  Select an option
                </option>
                <option value="male">Nigeria</option>
                <option value="female">Ghana</option>
                <option value="female">Kenya</option>
              </select>
            </label>
            <label htmlFor="state">
              State
              <select value={state} id="state" onChange={handleChangeState}>
                <option disabled={true} hidden value="">
                  Select an option
                </option>
                <option value="male">Oyo</option>
                <option value="female">Lagos</option>
                <option value="female">Accra</option>
                <option value="female">Nairobi</option>
              </select>
            </label>
            <label htmlFor="track">
              Track
              <select value={track} id="track" onChange={handleChangeTrack}>
                <option disabled={true} hidden value="">
                  Select an option
                </option>
                <option value="male">Frontend</option>
                <option value="female">Backend</option>
                <option value="female">UI/UX</option>
                <option value="female">Cloud</option>
              </select>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
