import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useInput from '../../hooks/use-input';
import logo from '../../assets/logo.png';
import google from '../../assets/google-icon.png';
// import chrome from '../../assets/chrome.png';
// import firefox from '../../assets/firefox.png';
// import explorer from '../../assets/explorer.png';
import classes from './SigninForm.module.css';
import password from '../../assets/password.svg';

const validInput = value => value.trim().length > 6;

function SigninForm() {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredName, setEnteredName] = useState('');
  // const [checked, setChecked] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(validInput);

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput(validInput);

  let formIsValid = false;

  if (enteredNameIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const navigate = useNavigate();

  // const emailChangeHandler = e => {
  //   setEnteredEmail(e.target.value);
  // };

  // const nameChangeHandler = e => {
  //   setEnteredName(e.target.value);
  // };

  // const checkHandler = e => {
  //   setChecked(e.target.checked);
  // };

  const submitHandler = e => {
    e.preventDefault();
    // if (!formIsValid) return;
    // navigate('/home/dashboard');
    console.log(enteredName && enteredPassword);

    resetNameInput();
  };

  return (
    // <div className="form flex flex-row justify-center p-10">
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
          <label className="" htmlFor="name">
            Full Name <span>*</span>
            {nameInputHasError && (
              <p className={classes['error-text']}>
                Name cannot be blank and must be 6 characters long!
              </p>
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
                Password must be 6 characters long!
              </p>
            )}
            <input
              type="password"
              id="password"
              value={enteredPassword}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              placeholder="password"
              required
            />
            <img src={password} alt="" />
          </label>
          <div className="">
            <label htmlFor="">
              <input
                className=""
                type="checkbox"
                required
                // onChange={checkHandler}
              />
              <p>
                I agree to the processing of my personal data (name and email)
                for the purpose of conducting the assessment. Read{' '}
                <a href="/" className="">
                  Privacy Policy
                </a>
                to know more.
              </p>
            </label>
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>

    /* <div className="sign-text text-white w-1/2 flex justify-center items-center">
        <div className="w-3/4 normal">
          <div className="font-medium text-3xl mb-1">
            Give your best shot while answering the questions
          </div>
          <div className="text-xs mb-10">Wish you the best in it.</div>
          <div className="text-medium mb-4 font-medium">
            Browser Compatibility works best with
          </div>
          <div className="flex flex-row space-x-10 mb-8">
            <img src={chrome} alt="chrome" />
            <img src={firefox} alt="firefox" />
            <img src={explorer} alt="explorer" />
          </div>
          <div className="text-medium mb-2 font-medium">Network Speed</div>
          <div className="text-sm leading-relaxed">
            Check if you have a decent internet speed. This can be done by
            logging into your email account. A decent internet connection should
            enable you to login within seconds.
          </div>
        </div>
      </div> */
    // </div>
  );
}

export default SigninForm;
