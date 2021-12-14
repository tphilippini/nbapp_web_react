import React from "react";
// import { FormattedMessage } from "react-intl";
// import Validator from "validator";

// import { forgot } from "../../../stores/actions/user.action";

// import Field from "../../forms/Field.component";
// import Label from "../../forms/Label.component";
// import Input from "../../forms/Input.component";
// import Help from "../../forms/Help.component";
// import Button from "../../buttons/Button.component";
// import ButtonLink from "../../buttons/ButtonLink.component";

// // import Columns from "../../elements/Columns.component";
// // import Column from "../../elements/Column.component";
// import Message from "../../elements/Message.component";

// const ForgotForm = ({ intl, history }) => {
const ForgotForm = () => {
  // const [user, setUser] = useState({ email: "" });
  // const [errors, setErrors] = useState({});
  // const [message, setMessage] = useState({});
  // const [loading, setLoading] = useState(false);

  // const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   const err = validate(user);
  //   setErrors(err);
  //   if (Object.keys(err).length === 0) {
  //     setLoading(true);
  //     const result = await forgot(user);
  //     setLoading(false);
  //     if (result.success) {
  //       setMessage({
  //         text: result.message,
  //         type: "success",
  //       });
  //       setTimeout(() => {
  //         setMessage({});
  //         history.push("/login");
  //       }, 5000);
  //     } else {
  //       setErrors(result.errors[0]);
  //       setTimeout(() => {
  //         setErrors({});
  //       }, 2000);
  //     }
  //   }
  // };

  // const validate = (data) => {
  //   const err = {};
  //   if (!Validator.isEmail(data.email)) err.email = "This email is invalid";
  //   return err;
  // };

  return (
    <>Forgot</>
    // <form onSubmit={onSubmit}>
    //   {errors.message && <Message danger>{errors.message}</Message>}

    //   {message.text && (
    //     <Message className={`is-${message.type ? message.type : ""}`}>
    //       {message.text}
    //     </Message>
    //   )}

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
    //       className={`${errors.email ? "is-danger" : ""}`}
    //       value={user.email}
    //       onChange={onChange}
    //     ></Input>
    //     {errors.email && <Help className="is-danger">{errors.email}</Help>}
    //   </Field>

    //   <Columns>
    //     <Column>
    //       <ButtonLink text="true" to="/login">
    //         <FormattedMessage
    //           id="account.information_2"
    //           default="Back to login"
    //         />
    //       </ButtonLink>
    //     </Column>
    //     <Column>
    //       <Button
    //         primary="true"
    //         className={`is-pulled-right ${loading ? "is-loading" : ""}`}
    //       >
    //         <FormattedMessage id="utils.send" default="Send" />
    //       </Button>
    //     </Column>
    //   </Columns>
    // </form>
  );
};

export default ForgotForm;
