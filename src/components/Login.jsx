import '../style.scss';
import '../bulma.css';
import React from 'react';

// import { USERS } from '../utils/fakedata.js';

const Login = () => {
  // const data = createRandomUser();
  return (
    <div className="login__content">
      <div className="login__logo">
        <img src={process.env.PUBLIC_URL + '/images/lendersqr.svg'} />
      </div>
      <div className="login__body">
        <div className="login__image">
          <img src={process.env.PUBLIC_URL + '/images/login-image.png'} />
        </div>
        <div className="login__form">
          <h2>
            <b>Welcome! </b>
          </h2>
          <p> Enter details to login </p>
          <form action="" id="form">
            <div className="login__form-control">
              <br />
              <input className="input" type="text" placeholder="Email" />
            </div>
            <div className="login__form-control">
              <br />
              <input className="input" type="password" placeholder="Password" />
            </div>
            <label>
              <a href="#">Forgot password? </a>{' '}
            </label>
            <button type="submit" className="button">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
