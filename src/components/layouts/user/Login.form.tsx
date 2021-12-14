import React from "react";
// import { FormattedMessage } from "react-intl";
// import Validator from "validator";

// import Field from "../../forms/Field.component";
// import Label from "../../forms/Label.component";
// import Input from "../../forms/Input.component";
// import Help from "../../forms/Help.component";
// import Button from "../../buttons/Button.component";
// import ButtonLink from "../../buttons/ButtonLink.component";

// import Columns from "../../elements/Columns.component";
// import Column from "../../elements/Column.component";
// import Message from "../../elements/Message.component";

// import UserContext from "../../../stores/contexts/user.context";
// import { login } from "../../../stores/actions/user.action";

const LoginForm = () => {
// const LoginForm = ({ intl, history }) => {
  // const [credentials, setCredentials] = useState({ email: "", password: "" });
  // const [errors, setErrors] = useState({});
  // const [loading, setLoading] = useState(false);

  // const { setUser } = useContext(UserContext);

  // const onChange = (e) =>
  //   setCredentials({ ...credentials, [e.target.name]: e.target.value });

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   const err = validate(credentials);
  //   setErrors(err);
  //   if (Object.keys(err).length === 0) {
  //     setLoading(true);
  //     const result = await login(credentials);
  //     setLoading(false);
  //     if (result?.email) {
  //       setUser(result);
  //     } else if (result?.message) setErrors(result);
  //     else {
  //       setErrors({ message: "Identifiant invalide" });
  //       setTimeout(() => {
  //         setErrors({});
  //       }, 2000);
  //     }
  //   }
  // };

  // const validate = (data) => {
  //   const err = {};
  //   // if (!Validator.isEmail(data.email))
  //   //   err.email = intl.formatMessage({ id: "account.password" });
  //   if (!Validator.isEmail(data.email)) err.email = "This email is invalid";
  //   if (!data.password) err.password = "Password is mandatory";
  //   return err;
  // };

  return (
    <>Login</>
    // <form onSubmit={onSubmit}>
    //   {errors.message && <Message primary>{errors.message}</Message>}
    //   <Field>
    //     <Label htmlFor="email">
    //       <FormattedMessage id="account.email" default="Email" />
    //     </Label>
    //     <Input
    //       id="email"
    //       name="email"
    //       type="mail"
    //       autoFocus={true}
    //       placeholder="e.g. alexsmith@gmail.com"
    //       // placeholder={intl.formatMessage({ id: "account.password" })}
    //       className={`${errors.email ? "is-danger" : ""}`}
    //       value={credentials.email}
    //       onChange={onChange}
    //     ></Input>
    //     {errors.email && <Help className="is-danger">{errors.email}</Help>}
    //   </Field>

    //   <Field>
    //     <Label htmlFor="password">Mot de passe</Label>
    //     {/* <FormattedMessage
    //       id="app.search.placeholder"
    //       defaultMessage="Search username"
    //     >
    //       {placeholder => (
    //         <Input
    //           placeholder={placeholder}
    //           size="large"
    //           allowClear
    //           value={this.state.input}
    //           onChange={this.onChange}
    //         />
    //       )}
    //     </FormattedMessage> */}
    //     <Input
    //       id="password"
    //       name="password"
    //       type="password"
    //       placeholder="make it secure"
    //       className={`${errors.password ? "is-danger" : ""}`}
    //       value={credentials.password}
    //       onChange={onChange}
    //     ></Input>
    //     {errors.password && (
    //       <Help className="is-danger">{errors.password}</Help>
    //     )}
    //   </Field>

    //   <Columns>
    //     <Column>
    //       <ButtonLink text="true" to="/forgot">
    //         <FormattedMessage id="account.forgot" default="Forgot password?" />
    //       </ButtonLink>
    //     </Column>
    //     <Column>
    //       <Button
    //         primary="true"
    //         className={`is-pulled-right ${loading ? "is-loading" : ""}`}
    //       >
    //         <FormattedMessage id="account.login" default="Login" />
    //       </Button>
    //     </Column>
    //   </Columns>
    // </form>
  );
};

export default LoginForm;
