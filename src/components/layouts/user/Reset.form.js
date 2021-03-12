import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { reset } from "../../../stores/actions/user.action";

import Field from "../../../components/forms/Field.component";
import Label from "../../../components/forms/Label.component";
import Input from "../../../components/forms/Input.component";
import Help from "../../../components/forms/Help.component";
import Button from "../../../components/buttons/Button.component";

import Columns from "../../elements/Columns.component";
import Column from "../../elements/Column.component";
import Message from "../../elements/Message.component";

const ResetForm = (props) => {
  const [user, setUser] = useState({
    token: props.token,
    password: "",
    confirm_password: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState({});
  const [loading, setLoading] = useState(false);

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const err = validate(user);
    setErrors(err);
    if (Object.keys(err).length === 0) {
      setLoading(true);
      reset(user)
        .then(() => {
          setMessage({
            text: "Your password has been updated with success",
            type: "success",
          });
          setTimeout(() => {
            setMessage({});
            setLoading(false);
            props.history.push("/login");
          }, 1000);
        })
        .catch((err) => {
          setErrors(err.response.data.errors[0]);
          setLoading(false);
        });
    }
  };

  const validate = (data) => {
    const err = {};
    if (!data.password) err.password = "Can't be blank";
    if (!data.confirm_password) err.confirm_password = "Can't be blank";
    if (data.password !== data.confirm_password)
      err.confirm_password = "Passwords must match";
    return err;
  };

  return (
    <form onSubmit={onSubmit}>
      {errors.message && <Message danger>{errors.message}</Message>}

      {message.text && (
        <Message className={`is-${message.type ? message.type : ""}`}>
          {message.text}
        </Message>
      )}

      <Field>
        <Label htmlFor="password">
          <FormattedMessage id="account.new_password" default="New password" />
        </Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="your new password"
          className={`${errors.password ? "is-danger" : ""}`}
          value={user.password}
          onChange={onChange}
        ></Input>
        {errors.password && (
          <Help className="is-danger">{errors.password}</Help>
        )}
      </Field>

      <Field>
        <Label htmlFor="confirmPassword">
          <FormattedMessage
            id="account.confirm_password"
            default="Password confirmation"
          />
        </Label>
        <Input
          id="confirmPassword"
          name="confirm_password"
          type="password"
          placeholder="type it again, please"
          className={`${errors.confirm_password ? "is-danger" : ""}`}
          value={user.confirm_password}
          onChange={onChange}
        ></Input>
        {errors.confirm_password && (
          <Help className="is-danger">{errors.confirm_password}</Help>
        )}
      </Field>

      <Columns>
        <Column>
          <Button
            primary="true"
            className={`is-pulled-right ${loading ? "is-loading" : ""}`}
          >
            <FormattedMessage id="utils.apply" default="Apply" />
          </Button>
        </Column>
      </Columns>
    </form>
  );
};

export default ResetForm;
