import React, { useState, useContext } from "react";
// import Validator from "validator";
// import { FormattedMessage } from "react-intl";
const FormattedMessage = require("react-intl");
// import styled from "styled-components";

import Field from "../../forms/Field.component";
import Label from "../../forms/Label.component";
import Radio from "../../forms/Radio.component";
import Input from "../../forms/Input.component";
import Help from "../../forms/Help.component";
import Button from "../../buttons/Button.component";

// import Columns from "../../elements/Columns.component";
// import Column from "../../elements/Column.component";
import Message from "../../elements/Message.component";

import api from "../../../stores/actions/api.action";

interface ICreateFormProps {}

const CreateForm = (props:ICreateFormProps) => {
  // const [league, setLeague] = useState({ weeks: "1" });
  // const [errors, setErrors] = useState({});
  // const [loading, setLoading] = useState(false);
  // const radioOptions = [1, 2, 3];

  // const onChange = (e) =>
  //   setLeague({ ...league, [e.target.name]: e.target.value });

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   const err = validate(league);
  //   setErrors(err);
  //   if (Object.keys(err).length === 0) {
  //     setLoading(true);
  //     api.league
  //       .post(league)
  //       .then((res) => props.history.push(`/league/${res.id}/settings`))
  //       .catch((err) => {
  //         console.log("ERR", err);
  //         setLoading(false);
  //       });
  //   }
  // };

  // const validate = (data) => {
  //   const err = {};
  //   // Each mail input, check if its valid mail
  //   // if (!Validator.isEmail(data.email)) err.email = "This email is invalid";

  //   if (!data.name) err.name = "League's name is mandatory";
  //   return err;
  // };

  // const league3 = new Leagues({
  //   name: "League One March",
  //   leagueId: UUID.v4(),
  //   weeks: 2,
  //   ownerId: "5dc2a210d69ae06b9af2bae0",
  //   // ownerId: result._id,
  //   modeNum: 0,
  //   photo:
  //     "https://www.billboard.com/files/styles/1500x992_gallery/public/media/kobe-bryant-1999-lakers-billboard-650.jpg",
  //   statusNum: 2
  // });
  // league3.players.push("5dc2a210d69ae06b9af2bae0");
  // league3.players.push(result._id);
  // league3.password = generatePassword();

  return (
    <>FORM</>
    // <form onSubmit={onSubmit}>
    //   {errors.message && <Message danger>{errors.message}</Message>}

    //   <Field>
    //     <Label htmlFor="name">
    //       <FormattedMessage id="league.name" default="name" />
    //     </Label>
    //     <Input
    //       id="name"
    //       name="name"
    //       autoFocus={true}
    //       placeholder="e.g. Ma Super Ligue"
    //       className={`${errors.name ? "is-danger" : ""}`}
    //       value={league.name}
    //       onChange={onChange}
    //     ></Input>
    //     {errors.name && <Help className="is-danger">{errors.name}</Help>}
    //   </Field>

    //   <Field>
    //     <Label>
    //       <FormattedMessage id="league.duration" />
    //     </Label>
    //     <Radio
    //       name="weeks"
    //       checked={league.weeks ? league.weeks : "1"}
    //       idMessage="league.week"
    //       options={radioOptions}
    //       onChange={onChange}
    //     />
    //   </Field>

    //   <Columns>
    //     <Column>
    //       <Button
    //         primary
    //         className={`is-pulled-right ${loading ? "is-loading" : ""}`}
    //       >
    //         <FormattedMessage id="utils.apply" />
    //       </Button>
    //     </Column>
    //   </Columns>
    // </form>
  );
};

export default CreateForm;
