import React, { useState, useContext } from "react";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

import Buttons from "../../buttons/Buttons.component";
import Button from "../../buttons/Button.component";
import Icon from "../../elements/Icon.component";
import Message from "../../elements/Message.component";

import AuthContext from "../../../stores/contexts/auth.context";
import {
  linkGoogle,
  linkFacebook,
  unlinkGoogle,
  unlinkFacebook
} from "../../../stores/actions/user.action";

const LinkSocialForm = props => {
  const [message, setMessage] = useState({});

  const { dispatch } = useContext(AuthContext);

  const onLinkingGoogle = res => {
    linkGoogle(res.accessToken, dispatch)
      .then(() => {
        setMessage({
          message: "Your account has been linked with success",
          type: "success"
        });
        setTimeout(() => {
          setMessage({});
        }, 1000);
      })
      .catch(err => {
        setMessage({ ...err.response.data.errors[0], type: "danger" });
      });
  };

  const onLinkingFacebook = res => {
    linkFacebook(res.accessToken, dispatch)
      .then(() => {
        setMessage({
          message: "Your account has been linked with success",
          type: "success"
        });
        setTimeout(() => {
          setMessage({});
        }, 1000);
      })
      .catch(err => {
        setMessage({ ...err.response.data.errors[0], type: "danger" });
      });
  };

  const onUnlinkingFacebook = () => {
    unlinkFacebook(dispatch)
      .then(() => {
        setMessage({
          message: "Your account has been unlinked with success",
          type: "success"
        });
        setTimeout(() => {
          setMessage({});
        }, 1000);
      })
      .catch(err => {
        setMessage({ ...err.response.data.errors[0], type: "danger" });
      });
  };

  const onUnlinkingGoogle = () => {
    unlinkGoogle(dispatch)
      .then(() => {
        setMessage({
          message: "Your account has been unlinked with success",
          type: "success"
        });
        setTimeout(() => {
          setMessage({});
        }, 1000);
      })
      .catch(err => {
        setMessage({ ...err.response.data.errors[0], type: "danger" });
      });
  };

  return (
    <>
      {message.message && (
        <Message
          small="true"
          className={`is-${message.type ? message.type : ""}`}
        >
          {message.message}
        </Message>
      )}

      <Buttons>
        {props.user.methods && props.user.methods.includes("facebook") ? (
          <Button
            facebook="true"
            outlined="true"
            small="true"
            onClick={onUnlinkingFacebook}
          >
            <Icon>
              <i className="fa fa-facebook"></i>
            </Icon>
            <span>Dissocier son compte Facebook</span>
          </Button>
        ) : (
          <FacebookLogin
            appId="409923532968639"
            autoLoad={false}
            fields="name,email,picture"
            callback={onLinkingFacebook}
            render={renderProps => (
              <Button
                facebook="true"
                small="true"
                onClick={renderProps.onClick}
              >
                <Icon>
                  <i className="fa fa-facebook"></i>
                </Icon>
                <span>Lier son compte Facebook</span>
              </Button>
            )}
          />
        )}

        {props.user.methods && props.user.methods.includes("google") ? (
          <Button
            google="true"
            outlined="true"
            small="true"
            onClick={onUnlinkingGoogle}
          >
            <Icon>
              <i className="fa fa-google"></i>
            </Icon>
            <span>Dissocier son compte Google</span>
          </Button>
        ) : (
          <GoogleLogin
            clientId="1084552878641-8fga50e1ln4uf9ujvfk9roucau9b06oo.apps.googleusercontent.com"
            render={renderProps => (
              <Button google="true" small="true" onClick={renderProps.onClick}>
                <Icon>
                  <i className="fa fa-google"></i>
                </Icon>
                <span>Lier son compte Google</span>
              </Button>
            )}
            onSuccess={onLinkingGoogle}
            onFailure={onLinkingGoogle}
          />
        )}
      </Buttons>
    </>
  );
};

export default LinkSocialForm;
