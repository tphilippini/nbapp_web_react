import React, { useState, useContext } from 'react';
// import Validator from 'validator';
import { FormattedMessage } from 'react-intl';

import AuthContext from '../../stores/contexts/auth.context';
import { patch } from '../../stores/actions/user.action';

const AccountProfileForm = props => {
  const [user, setUser] = useState({ ...props.user });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState({});
  const [loading, setLoading] = useState(false);

  const { dispatch } = useContext(AuthContext);

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    const err = validate(user);
    setErrors(err);
    if (Object.keys(err).length === 0) {
      setLoading(true);
      patch(user, 'update', dispatch)
        .then(() => {
          setMessage({
            text: 'Your account has been modified with success',
            type: 'success'
          });
          setTimeout(() => {
            setMessage({});
            setLoading(false);
          }, 1000);
        })
        .catch(err => {
          setErrors(err.response.data.errors[0]);
          setLoading(false);
          setTimeout(() => {
            setErrors({});
          }, 1000);
        });
    }
  };

  const validate = data => {
    const err = {};
    // if (!Validator.isEmail(data.email)) err.email = 'This email is invalid';
    if (!data.firstName) err.firstName = 'firstName is mandatory';
    if (!data.lastName) err.lastName = 'lastName is mandatory';
    if (!data.alias) err.alias = 'Alias is mandatory';
    return err;
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      {errors.message && (
        <article className="message is-danger">
          <div className="message-body">{errors.message}</div>
        </article>
      )}
      {message.text && (
        <article className={`message is-${message.type ? message.type : ''}`}>
          <div className="message-body">{message.text}</div>
        </article>
      )}
      <div className="field">
        <label className="label is-small" htmlFor="alias">
          <FormattedMessage id="account.alias" default="username" />
        </label>
        <div className="control">
          <input
            id="alias"
            className={`input ${errors.alias ? 'is-danger' : ''}`}
            autoComplete="off"
            name="alias"
            type="text"
            placeholder="e.g. alexS"
            value={user.alias}
            onChange={onChange}
          />
        </div>
        {errors.alias && <p className="help is-danger">{errors.alias}</p>}
      </div>

      <div className="field">
        <label className="label is-small" htmlFor="firstName">
          <FormattedMessage id="account.firstName" default="firstName" />
        </label>
        <div className="control">
          <input
            id="firstName"
            className={`input ${errors.firstName ? 'is-danger' : ''}`}
            autoComplete="off"
            name="firstName"
            type="text"
            placeholder="e.g. Alex"
            value={user.firstName}
            onChange={onChange}
          />
        </div>
        {errors.firstName && (
          <p className="help is-danger">{errors.firstName}</p>
        )}
      </div>

      <div className="field">
        <label className="label is-small" htmlFor="lastName">
          <FormattedMessage id="account.lastName" default="lastName" />
        </label>
        <div className="control">
          <input
            id="lastName"
            className={`input ${errors.lastName ? 'is-danger' : ''}`}
            autoComplete="off"
            name="lastName"
            type="text"
            placeholder="e.g. Smith"
            value={user.lastName}
            onChange={onChange}
          />
        </div>
        {errors.lastName && <p className="help is-danger">{errors.lastName}</p>}
      </div>

      {/* <div className="field">
        <label className="label is-small" htmlFor="email">
          Email
        </label>
        <div className="control">
          <input
            id="email"
            className={`input ${errors.email ? "is-danger" : ""}`}
            autoComplete="off"
            name="email"
            type="mail"
            placeholder="e.g. alexsmith@gmail.com"
            value={user.email}
            onChange={onChange}
          />
        </div>
        {errors.email && <p className="help is-danger">{errors.email}</p>}
      </div> */}

      <div className="columns">
        <div className="column">
          <div className="field is-pulled-right">
            <div className="control">
              <button
                className={`button is-info ${loading ? 'is-loading' : ''}`}
              >
                <FormattedMessage id="utils.apply" default="apply" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AccountProfileForm;
