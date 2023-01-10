import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import useInput from '../../hooks/use-input';
import logo from '../../assets/logo.png';
import google from '../../assets/google-icon.png';
import classes from './SigninForm.module.css';
import password from '../../assets/password.svg';

const isNotEmpty = value => value.trim() !== '';
const validPassword = value => value.trim().length > 6;

function SigninForm() {
  const [view, setView] = useState(false);
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput(validPassword);

  const {
    value: checked,
    isValid: checkedIsValid,
    valueChangeHandler: checkedChangeHandler,
    inputBlurHandler: checkedBlurHandler,
    reset: resetCheckedInput,
  } = useInput(value => value === 'on');

  let formIsValid = false;

  if (enteredNameIsValid && enteredPasswordIsValid && checkedIsValid) {
    formIsValid = true;
  }

  const navigate = useNavigate();

  const viewPasswordHandler = () => {
    setView(!view);
  };

  const submitHandler = e => {
    e.preventDefault();

    if (!formIsValid) return;

    navigate('/home/dashboard');

    resetNameInput();
    resetPasswordInput();
    resetCheckedInput();
  };

  return (
    <div className={classes.form}>
      <img src={logo} alt="logo" />
      <div className={classes['form-container']}>
        <button>
          <img src={google} alt="google" />
          Sign in with Google
        </button>
        <div className={classes.break}>
          <hr />
          OR
          <hr />
        </div>
        <form onSubmit={submitHandler}>
          <label htmlFor="name">
            Full Name <span>*</span>
            {nameInputHasError && (
              <p className={classes['error-text']}>Name cannot be blank</p>
            )}
            <input
              type="text"
              id="name"
              value={enteredName}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              placeholder="e.g Chukwuma Adekunle Ciroma"
              required
            />
          </label>
          <label className={classes.password} htmlFor="email">
            Password <span>*</span>
            {passwordInputHasError && (
              <p className={classes['error-text']}>
                Password must be at least 7 characters long!
              </p>
            )}
            <input
              type={view ? 'text' : 'password'}
              id="password"
              value={enteredPassword}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              required
            />
            <img src={password} alt="" onClick={viewPasswordHandler} />
          </label>
          <div className="">
            <label htmlFor="">
              <input
                type="checkbox"
                checked={checked}
                onChange={checkedChangeHandler}
                onBlur={checkedBlurHandler}
                required
              />
              <p>
                I agree to the processing of my personal data (name and email)
                for the purpose of conducting the assessment. Read{' '}
                <Link to="/" className={classes.link}>
                  Privacy Policy
                </Link>{' '}
                to know more.
              </p>
            </label>
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default SigninForm;
