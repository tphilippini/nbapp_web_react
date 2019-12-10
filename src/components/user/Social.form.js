import React, { useState, useContext } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

import AuthContext from '../../stores/contexts/auth.context';
import { loginFacebook, loginGoogle } from '../../stores/actions/auth.action';

const SocialForm = props => {
  const [errors, setErrors] = useState({});

  const { dispatch } = useContext(AuthContext);

  const onSubmitGoogle = res => {
    loginGoogle(res.accessToken, dispatch)
      .then(() => props.history.push('/dashboard'))
      .catch(err => {
        setErrors(err.response.data.errors[0]);
      });
  };

  const onSubmitFacebook = res => {
    loginFacebook(res.accessToken, dispatch)
      .then(() => props.history.push('/dashboard'))
      .catch(err => {
        setErrors(err.response.data.errors[0]);
      });
  };

  return (
    <>
      {errors.message && (
        <article className="message is-danger">
          <div className="message-body">{errors.message}</div>
        </article>
      )}

      <div className="columns is-vcentered is-centered">
        <div className="column is-10 is-paddingless">
          <div className="buttons">
            <FacebookLogin
              appId="409923532968639"
              autoLoad={false}
              textButton="Se connecter avec Facebook"
              fields="name,email,picture"
              callback={onSubmitFacebook}
              render={renderProps => (
                <button
                  className="button is-facebook"
                  onClick={renderProps.onClick}
                >
                  <span className="icon">
                    <i className="fa fa-facebook"></i>
                  </span>
                  <span>Se connecter avec Facebook</span>
                </button>
              )}
            />

            <GoogleLogin
              clientId="1084552878641-8fga50e1ln4uf9ujvfk9roucau9b06oo.apps.googleusercontent.com"
              render={renderProps => (
                <button
                  className="button is-google"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <span className="icon">
                    <i className="fa fa-google"></i>
                  </span>
                  <span>Se connecter avec Google</span>
                </button>
              )}
              onSuccess={onSubmitGoogle}
              onFailure={onSubmitGoogle}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialForm;
