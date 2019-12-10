import React, { useState, useContext } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

import AuthContext from '../../stores/contexts/auth.context';
import {
  linkGoogle,
  linkFacebook,
  unlinkGoogle,
  unlinkFacebook
} from '../../stores/actions/user.action';

const LinkSocialForm = props => {
  const [message, setMessage] = useState({});

  const { dispatch } = useContext(AuthContext);

  const onLinkingGoogle = res => {
    linkGoogle(res.accessToken, dispatch)
      .then(() => {
        setMessage({
          message: 'Your account has been linked with success',
          type: 'success'
        });
        setTimeout(() => {
          setMessage({});
        }, 1000);
      })
      .catch(err => {
        setMessage({ ...err.response.data.errors[0], type: 'danger' });
      });
  };

  const onLinkingFacebook = res => {
    linkFacebook(res.accessToken, dispatch)
      .then(() => {
        setMessage({
          message: 'Your account has been linked with success',
          type: 'success'
        });
        setTimeout(() => {
          setMessage({});
        }, 1000);
      })
      .catch(err => {
        setMessage({ ...err.response.data.errors[0], type: 'danger' });
      });
  };

  const onUnlinkingFacebook = () => {
    unlinkFacebook(dispatch)
      .then(() => {
        setMessage({
          message: 'Your account has been unlinked with success',
          type: 'success'
        });
        setTimeout(() => {
          setMessage({});
        }, 1000);
      })
      .catch(err => {
        setMessage({ ...err.response.data.errors[0], type: 'danger' });
      });
  };

  const onUnlinkingGoogle = () => {
    unlinkGoogle(dispatch)
      .then(() => {
        setMessage({
          message: 'Your account has been unlinked with success',
          type: 'success'
        });
        setTimeout(() => {
          setMessage({});
        }, 1000);
      })
      .catch(err => {
        setMessage({ ...err.response.data.errors[0], type: 'danger' });
      });
  };

  return (
    <>
      {message.message && (
        <span
          className={`tag is-small has-social-link is-light is-${
            message.type ? message.type : ''
          }`}
        >
          {message.message}
        </span>
      )}

      {props.user.methods && props.user.methods.includes('facebook') ? (
        <button
          className="button is-facebook is-small is-outline has-social-link"
          onClick={onUnlinkingFacebook}
        >
          <span className="icon">
            <i className="fa fa-facebook"></i>
          </span>
          <span>Dissocier son compte</span>
        </button>
      ) : (
        <FacebookLogin
          appId="409923532968639"
          autoLoad={false}
          fields="name,email,picture"
          callback={onLinkingFacebook}
          render={renderProps => (
            <button
              className="button is-facebook is-small has-social-link"
              onClick={renderProps.onClick}
            >
              <span className="icon">
                <i className="fa fa-facebook"></i>
              </span>
              <span>Lier son compte</span>
            </button>
          )}
        />
      )}

      {props.user.methods && props.user.methods.includes('google') ? (
        <button
          className="button is-google is-small is-outline has-social-link"
          onClick={onUnlinkingGoogle}
        >
          <span className="icon">
            <i className="fa fa-google"></i>
          </span>
          <span>Dissocier son compte</span>
        </button>
      ) : (
        <GoogleLogin
          clientId="1084552878641-8fga50e1ln4uf9ujvfk9roucau9b06oo.apps.googleusercontent.com"
          render={renderProps => (
            <button
              className="button is-google is-small has-social-link has-tooltip-top"
              onClick={renderProps.onClick}
            >
              <span className="icon">
                <i className="fa fa-google"></i>
              </span>
              <span>Lier son compte</span>
            </button>
          )}
          onSuccess={onLinkingGoogle}
          onFailure={onLinkingGoogle}
        />
      )}
    </>
  );
};

export default LinkSocialForm;
