import React, { useState, useContext } from "react";
import Validator from "validator";
import { FormattedMessage, FormattedPlural, injectIntl } from "react-intl";
import styled from "styled-components";

import Field from "../../../components/forms/Field.component";
import Label from "../../../components/forms/Label.component";
import Input from "../../../components/forms/Input.component";
import Help from "../../../components/forms/Help.component";
import Button from "../../../components/buttons/Button.component";

import Columns from "../../elements/Columns.component";
import Column from "../../elements/Column.component";
import Message from "../../elements/Message.component";

// import AuthContext from "../../../stores/contexts/auth.context";
// import { signup } from "../../../stores/actions/user.action";

const RadiosWrapper = styled.div`
  position: relative;
  text-align: center;

  input:checked + label {
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.font};
    box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
      0 0 0 1px rgba(10, 10, 10, 0.02);
  }
`;

const RadioLabel = styled.label`
  display: inline-block;
  padding: 1em 2em;
  margin: 0.5em;
  cursor: pointer;
  color: ${props => props.theme.font};
  border-radius: 6px;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.02);
  transition: 0.3s;
  user-select: none;
  font-size: 0.8rem;

  &:active {
    transform: translateY(2px);
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2),
      inset 0px -1px 0 rgba(0, 0, 0, 0.22);
  }
`;

const CreateForm = props => {
  const [league, setLeague] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const { formatMessage } = props.intl;

  // const { dispatch } = useContext(AuthContext);

  const onChange = e =>
    setLeague({ ...league, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    const err = validate(league);
    setErrors(err);
    console.log("League", league);
    // if (Object.keys(err).length === 0) {
    //   setLoading(true);
    //   signup(user, dispatch)
    //     .then(() => props.history.push("/dashboard"))
    //     .catch(err => {
    //       setErrors(err.response.data.errors[0]);
    //       setLoading(false);
    //     });
    // }
  };

  const validate = data => {
    const err = {};
    // Each mail input, check if its valid mail
    // if (!Validator.isEmail(data.email)) err.email = "This email is invalid";

    if (!data.name) err.name = "League's name is mandatory";
    return err;
  };

  // const league3 = new Leagues({
  //   name: "League One March",
  //   leagueId: UUID.v4(),
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
    <form onSubmit={onSubmit}>
      {errors.message && <Message danger>{errors.message}</Message>}

      <Field>
        <Label htmlFor="name">
          <FormattedMessage id="league.name" default="name" />
        </Label>
        <Input
          id="name"
          name="name"
          autoFocus={true}
          placeholder="e.g. Ma Super Ligue"
          className={`${errors.name ? "is-danger" : ""}`}
          value={league.name}
          onChange={onChange}
        ></Input>
        {errors.name && <Help className="is-danger">{errors.name}</Help>}
      </Field>

      <Field>
        <Label>
          <FormattedMessage id="nav.hello" values={{ alias: "toto" }} />
        </Label>
        <RadiosWrapper>
          <input
            id="1-week"
            name="weeks"
            type="radio"
            className="is-hidden"
            value="1"
          ></input>
          <RadioLabel htmlFor="1-week">
            <FormattedPlural
              value={1}
              values={{ duration: "1" }}
              one={formatMessage({ id: "league.week_one" })}
              other={formatMessage({ id: "league.week_many" })}
            />
          </RadioLabel>
          <input
            id="2-week"
            name="weeks"
            type="radio"
            className="is-hidden"
            value="2"
          ></input>
          <RadioLabel htmlFor="2-week">2 weeks</RadioLabel>
          <input
            id="3-week"
            name="weeks"
            type="radio"
            className="is-hidden"
            value="3"
          ></input>
          <RadioLabel htmlFor="3-week">3 weeks</RadioLabel>
          <input
            id="4-week"
            name="weeks"
            type="radio"
            className="is-hidden"
            value="4"
          ></input>
          <RadioLabel htmlFor="4-week">4 weeks</RadioLabel>
          <input
            id="0-week"
            name="weeks"
            type="radio"
            className="is-hidden"
            value="0"
          ></input>
          <RadioLabel htmlFor="0-week">All season</RadioLabel>
        </RadiosWrapper>
      </Field>

      <Columns>
        <Column>
          <Button
            primary
            className={`is-pulled-right ${loading ? "is-loading" : ""}`}
          >
            <FormattedMessage id="utils.apply" />
          </Button>
        </Column>
      </Columns>
    </form>
  );
};

export default injectIntl(CreateForm);
