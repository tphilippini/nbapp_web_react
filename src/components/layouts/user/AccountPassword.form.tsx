import React, { useState, useContext } from "react";
// import { FormattedMessage } from "react-intl";
const { FormattedMessage } = require('react-intl')

import UserContext from "../../../stores/contexts/user.context";
import { patch } from "../../../stores/actions/user.action";

import Field from "../../forms/Field.component";
import Label from "../../forms/Label.component";
import Input from "../../forms/Input.component";
import Help from "../../forms/Help.component";
import Button from "../../buttons/Button.component";

// import Columns from "../../elements/Columns.component";
// import Column from "../../elements/Column.component";
import Message from "../../elements/Message.component";

const AccountPasswordForm = () => {
  // const [credentials, setCredentials] = useState({
  //   password: "",
  //   new_password: "",
  //   confirm_password: "",
  // });
  // const [errors, setErrors] = useState({});
  // const [message, setMessage] = useState({});
  // const [loading, setLoading] = useState(false);

  // const { user } = useContext(UserContext);

  // const onChange = (e) =>
  //   setCredentials({ ...credentials, [e.target.name]: e.target.value });

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   const err = validate(credentials);
  //   setErrors(err);
  //   if (Object.keys(err).length === 0) {
  //     setLoading(true);
  //     const result = await patch({ ...user, ...credentials }, "password");
  //     setLoading(false);
  //     if (result?.email) {
  //       setMessage({
  //         text: "Your password has been updated with success",
  //         type: "success",
  //       });
  //       setTimeout(() => {
  //         setMessage({});
  //         setCredentials({
  //           password: "",
  //           new_password: "",
  //           confirm_password: "",
  //         });
  //       }, 2000);
  //     } else {
  //       setErrors(result);
  //       setTimeout(() => {
  //         setErrors({});
  //       }, 2000);
  //     }
  //   }
  // };

  // const validate = (data) => {
  //   const err = {};
  //   if (!data.password) err.password = "Can't be blank";
  //   if (!data.new_password) err.new_password = "Can't be blank";
  //   if (data.new_password !== data.confirm_password)
  //     err.confirm_password = "Passwords must match";
  //   return err;
  // };

  return (
    <>Account password</>
    /* <form onSubmit={onSubmit}>
      {errors.message && <Message danger>{errors.message}</Message>}

      {message.text && (
        <Message className={`is-${message.type ? message.type : ""}`}>
          {message.text}
        </Message>
      )}

      <Field>
        <Label htmlFor="password">
          <FormattedMessage id="account.password" default="Password" />
        </Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="your password"
          className={`${errors.password ? "is-danger" : ""}`}
          value={credentials.password}
          onChange={onChange}
        ></Input>
        {errors.password && (
          <Help className="is-danger">{errors.password}</Help>
        )}
      </Field>

      <Field>
        <Label htmlFor="newPassword">
          <FormattedMessage id="account.new_password" default="New password" />
        </Label>
        <Input
          id="newPassword"
          name="new_password"
          type="password"
          placeholder="your new password"
          className={`${errors.new_password ? "is-danger" : ""}`}
          value={credentials.new_password}
          onChange={onChange}
        ></Input>
        {errors.new_password && (
          <Help className="is-danger">{errors.new_password}</Help>
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
          value={credentials.confirm_password}
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
            <FormattedMessage id="utils.update" default="Update" />
          </Button>
        </Column>
      </Columns>
    </form>*/
  )
};

export default AccountPasswordForm;
