import React, { useState, useContext } from "react";
import { FormattedMessage } from "react-intl";
import Validator from "validator";

import Field from "../../../components/forms/Field.component";
import Label from "../../../components/forms/Label.component";
import Input from "../../../components/forms/Input.component";
import Help from "../../../components/forms/Help.component";
import Button from "../../../components/buttons/Button.component";
import ButtonLink from "../../../components/buttons/ButtonLink.component";

import Columns from "../../elements/Columns.component";
import Column from "../../elements/Column.component";
import Message from "../../elements/Message.component";

import AuthContext from "../../../stores/contexts/auth.context";
import { login } from "../../../stores/actions/auth.action";

const LoginForm = props => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const { dispatch } = useContext(AuthContext);

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    const err = validate(user);
    setErrors(err);
    if (Object.keys(err).length === 0) {
      setLoading(true);
      login(user, dispatch)
        .then(() => props.history.push("/dashboard"))
        .catch(err => {
          setErrors(err.response.data.errors[0]);
          setLoading(false);
        });
    }
  };

  const validate = data => {
    const err = {};
    if (!Validator.isEmail(data.email)) err.email = "This email is invalid";
    if (!data.password) err.password = "Password is mandatory";
    return err;
  };

  return (
    <form onSubmit={onSubmit}>
      {errors.message && <Message primary>{errors.message}</Message>}
      <Field>
        <Label htmlFor="email">
          <FormattedMessage id="account.email" default="Email" />
        </Label>
        <Input
          id="email"
          name="email"
          type="mail"
          autoFocus={true}
          placeholder="e.g. alexsmith@gmail.com"
          className={`${errors.email ? "is-danger" : ""}`}
          value={user.email}
          onChange={onChange}
        ></Input>
        {errors.email && <Help className="is-danger">{errors.email}</Help>}
      </Field>

      <Field>
        <Label htmlFor="password">Mot de passe</Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="make it secure"
          className={`${errors.password ? "is-danger" : ""}`}
          value={user.password}
          onChange={onChange}
        ></Input>
        {errors.password && (
          <Help className="is-danger">{errors.password}</Help>
        )}
      </Field>

      <Columns>
        <Column>
          <ButtonLink text="true" to="/forgot">
            <FormattedMessage id="account.forgot" default="Forgot password?" />
          </ButtonLink>
        </Column>
        <Column>
          <Button
            primary="true"
            className={`is-pulled-right ${loading ? "is-loading" : ""}`}
          >
            <FormattedMessage id="account.login" default="Login" />
          </Button>
        </Column>
      </Columns>
    </form>
  );
};

export default LoginForm;
