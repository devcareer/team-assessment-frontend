import React from 'react';
import SigninForm from '../components/Signin/SigninForm';
import SignInText from '../components/Signin/SignInText';

import classes from './SignIn.module.css';

function Signin() {
  return (
    <section className={classes.signin}>
      <SigninForm />
      <SignInText />
    </section>
  );
}

export default Signin;
