import '../style.scss';
import '../bulma.css';
import React from 'react';
// import { USERS } from '../utils/fakedata.js';

const Login = () => {
  // const data = createRandomUser();
  return (
    <div className="login__content">
      <div className="login__logo">
        <img src="https://lendsqr.com/assets/svgs/lendsqr-logo-colored.svg" />
      </div>
      <div className="login__body">
        <div className="login__image">
          <img src="https://lh3.googleusercontent.com/WavpRW-J23C4SnmNcdkAQPNGcuCpAiAij7OYUn5YS6PPUgVRKfHQXk7vZOeTCZVaqjPl7xCWmolSM7rd1bYaEVnAOPeuigKijR9Ppoic3nZAoi7ZAPn8-QtVK6SW8dMJ2UrY0flElon8dOr1XtQhNzoE5SPXt6H2xvXZSbWb-J_K1ExxHzCHGxR_tqPhIaqVwNHiBXVTXX8ppvq-h02LmBTFtrw8AA2iL69_YmRb27cnMLqNfXRIaFJTi0VDuiisDgj_ubhN3FFOMV6sSyFM9979lAZiw4n0_5kikyHmHxMA-mNd3mhoWC2p5_7PMVtYBWV6ems6BMF4kDkVf1rWzjj1HkajS4W1_LOrXymVEKe_q_FbbORMapNOz8YvtBe1PEr5MGF2kfylStljtIfJUvCq-qHh5kT2zX80_PHDPqEm7p-XxIwB6244GkE85OlW-jZckpJ49CxKoIhXEb2oyzw7S2zlVDhShiSIInjioILRaDxVH6FFw6KRtwsZnzYjwl4NPSxQcEoofYcrBK2l69kXm80FUKE-7s6P8zlF5G-dsd6h3j3omVZWGmgPhECCbFq0a9-0OLOt8QsK_RvDShBGVRjqGDkGzpmXOijks2vtwC1mBUAdzcXrAMCSQvlds65MpUGFA8L_EQWr0pEGKb_K2co8Xbz99GFf7hPaHmMfHHJP46Zcesp5g9UKd-ZiMhtUeiHzPgO3YSzIKhPC9hnFWKFw0pQoZ72fNGbudQEFsMwCjCLcgzsU3RJLNvWsvV5MrDMSTVGB2BJpVGTUyV7GIjv5MPy109tDsMYe2f76iOYHOjoaaFmWbKrVcUOU-Afj_xnHtv761vnnsidNVHdqpxuJhUBh79tk93btntXr=w326-h210-no?authuser=0" />
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
