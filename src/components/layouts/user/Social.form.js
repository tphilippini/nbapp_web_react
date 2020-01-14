import React, { useState, useContext } from "react";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

import Button from "../../buttons/Button.component";
import Icon from "../../elements/Icon.component";
import Message from "../../elements/Message.component";
import Column from "../../elements/Column.component";
import Columns from "../../elements/Columns.component";

import AuthContext from "../../../stores/contexts/auth.context";
import {
  loginFacebook,
  loginGoogle
} from "../../../stores/actions/auth.action";

const SocialForm = props => {
  const [errors, setErrors] = useState({});

  const { dispatch } = useContext(AuthContext);

  const onSubmitGoogle = res => {
    loginGoogle(res.accessToken, dispatch)
      .then(() => props.history.push("/dashboard"))
      .catch(err => {
        setErrors(err.response.data.errors[0]);
      });
  };

  const onSubmitFacebook = res => {
    loginFacebook(res.accessToken, dispatch)
      .then(() => props.history.push("/dashboard"))
      .catch(err => {
        setErrors(err.response.data.errors[0]);
      });
  };

  return (
    <>
      {errors.message && <Message danger>{errors.message}</Message>}

      <Columns marginless="true" centered="true" vcentered="true">
        <Column className="has-text-centered">
          <FacebookLogin
            appId="409923532968639"
            autoLoad={false}
            textButton="Se connecter avec Facebook"
            fields="name,email,picture"
            callback={onSubmitFacebook}
            render={renderProps => (
              <Button facebook="true" onClick={renderProps.onClick}>
                <Icon>
                  <i className="fa fa-facebook"></i>
                </Icon>
                <span>Se connecter avec Facebook</span>
              </Button>
            )}
          />
        </Column>
        <Column className="has-text-centered">
          <GoogleLogin
            clientId="1084552878641-8fga50e1ln4uf9ujvfk9roucau9b06oo.apps.googleusercontent.com"
            render={renderProps => (
              <Button
                google="true"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <Icon>
                  <i className="fa fa-google"></i>
                </Icon>
                <span>Se connecter avec Google</span>
              </Button>
            )}
            onSuccess={onSubmitGoogle}
            onFailure={onSubmitGoogle}
          />
        </Column>
      </Columns>
    </>
  );
};

export default SocialForm;
