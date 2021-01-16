import React, { useState, useContext } from "react";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

import Button from "../../buttons/Button.component";
import Icon from "../../elements/Icon.component";
import Message from "../../elements/Message.component";
import Column from "../../elements/Column.component";
import Columns from "../../elements/Columns.component";

import UserContext from "../../../stores/contexts/user.context";
import { loginSocial } from "../../../stores/actions/user.action";

const SocialForm = ({ intl, history }) => {
  const [errors, setErrors] = useState({});

  const { user, setUser } = useContext(UserContext);

  const onSubmitGoogle = async (res) => {
    const result = await loginSocial(res.accessToken, "google");
    if (result.email) {
      setUser(result);
      history.push("/dashboard");
    } else if (result.message) setErrors(result);
    else setErrors({ message: "Identifiant invalide" });
  };

  const onSubmitFacebook = async (res) => {
    const result = await loginSocial(res.accessToken, "facebook");
    if (result.email) {
      setUser(result);
      history.push("/dashboard");
    } else if (result.message) setErrors(result);
    else setErrors({ message: "Identifiant invalide" });
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
            render={(renderProps) => (
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
            render={(renderProps) => (
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
