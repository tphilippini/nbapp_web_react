import React, { useState, useContext } from "react";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

import Buttons from "../../buttons/Buttons.component";
import Button from "../../buttons/Button.component";
import Icon from "../../elements/Icon.component";
import Message from "../../elements/Message.component";

import UserContext from "../../../stores/contexts/user.context";
import { linkSocial, unlinkSocial } from "../../../stores/actions/user.action";

const LinkSocialForm = (props) => {
  const [message, setMessage] = useState({});
  const { user, setUser } = useContext(UserContext);

  const onLinkingGoogle = async (res) => {
    const result = await linkSocial(res.accessToken, "google");
    displayLinkSocialMessage(result);
  };

  const onLinkingFacebook = async (res) => {
    const result = await linkSocial(res.accessToken, "facebook");
    displayLinkSocialMessage(result);
  };

  const displayLinkSocialMessage = (result) => {
    if (result.email) {
      setUser(result);
      setMessage({
        message: "Your account has been linked with success",
        type: "success",
      });
    } else if (result.message) setMessage({ ...result, type: "danger" });
    else setMessage({ message: "Identifiant invalide", type: "danger" });

    setTimeout(() => {
      setMessage({});
    }, 2000);
  };

  const onUnlink = async (method) => {
    const result = await unlinkSocial(method);

    if (result.email) {
      setUser(result);
      setMessage({
        message: "Your account has been unlinked with success",
        type: "success",
      });
    } else if (result.message) setMessage({ ...result, type: "danger" });
    else setMessage({ message: "Identifiant invalide", type: "danger" });

    setTimeout(() => {
      setMessage({});
    }, 2000);
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
            onClick={() => onUnlink("facebook")}
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
            render={(renderProps) => (
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
            onClick={() => onUnlink("google")}
          >
            <Icon>
              <i className="fa fa-google"></i>
            </Icon>
            <span>Dissocier son compte Google</span>
          </Button>
        ) : (
          <GoogleLogin
            clientId="1084552878641-8fga50e1ln4uf9ujvfk9roucau9b06oo.apps.googleusercontent.com"
            render={(renderProps) => (
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
