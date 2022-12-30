import React from 'react';
import SigninForm from '../components/Signin/SigninForm';

function Signin(props) {
  return (
    <div>
      <SigninForm onlogin={props.onLogin} onsetLogin={props.onsetLogin} />
    </div>
  );
}

export default Signin;
