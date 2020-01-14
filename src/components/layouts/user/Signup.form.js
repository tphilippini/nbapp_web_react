import React, { useState, useContext } from "react";
import Validator from "validator";
import { FormattedMessage } from "react-intl";

import Field from "../../../components/forms/Field.component";
import Label from "../../../components/forms/Label.component";
import Input from "../../../components/forms/Input.component";
import Help from "../../../components/forms/Help.component";
import Button from "../../../components/buttons/Button.component";

import Columns from "../../elements/Columns.component";
import Column from "../../elements/Column.component";
import Message from "../../elements/Message.component";

import AuthContext from "../../../stores/contexts/auth.context";
import { signup } from "../../../stores/actions/user.action";

const SignupForm = props => {
  const [user, setUser] = useState({ alias: "", email: "", password: "" });
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
      signup(user, dispatch)
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
    if (!data.alias) err.alias = "Alias is mandatory";
    return err;
  };

  return (
    <form onSubmit={onSubmit}>
      {errors.message && <Message danger>{errors.message}</Message>}

      <Field>
        <Label htmlFor="alias">
          <FormattedMessage id="account.alias" default="username" />
        </Label>
        <Input
          id="alias"
          name="alias"
          autoFocus={true}
          placeholder="e.g. alexS"
          className={`${errors.alias ? "is-danger" : ""}`}
          value={user.alias}
          onChange={onChange}
        ></Input>
        {errors.alias && <Help className="is-danger">{errors.alias}</Help>}
      </Field>

      <Field>
        <Label htmlFor="email">
          <FormattedMessage id="account.email" default="Email" />
        </Label>
        <Input
          id="email"
          name="email"
          placeholder="e.g. alexsmith@gmail.com"
          className={`${errors.alias ? "is-danger" : ""}`}
          value={user.email}
          onChange={onChange}
        ></Input>
        {errors.email && <Help className="is-danger">{errors.email}</Help>}
      </Field>

      <Field>
        <Label htmlFor="password">
          <FormattedMessage id="account.password" default="Password" />
        </Label>
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
          <Button
            primary
            className={`is-pulled-right ${loading ? "is-loading" : ""}`}
          >
            <FormattedMessage id="account.register" default="Next" />
          </Button>
        </Column>
      </Columns>
    </form>
  );
};

export default SignupForm;
