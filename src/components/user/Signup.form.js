import React, { useState, useContext } from 'react';
import Validator from 'validator';
import { FormattedMessage } from 'react-intl';

import AuthContext from '../../stores/contexts/auth.context';
import { signup } from '../../stores/actions/user.action';

const SignupForm = props => {
  const [user, setUser] = useState({ alias: '', email: '', password: '' });
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
        .then(() => props.history.push('/dashboard'))
        .catch(err => {
          setErrors(err.response.data.errors[0]);
          setLoading(false);
        });
    }
  };

  const validate = data => {
    const err = {};
    if (!Validator.isEmail(data.email)) err.email = 'This email is invalid';
    if (!data.password) err.password = 'Password is mandatory';
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
      <div className="field">
        <label className="label is-small" htmlFor="alias">
          <FormattedMessage id="account.alias" default="username" />
        </label>
        <div className="control">
          <input
            id="alias"
            className={`input ${errors.alias ? 'is-danger' : ''}`}
            autoComplete="off"
            autoFocus
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
        <label className="label is-small" htmlFor="email">
          Email
        </label>
        <div className="control">
          <input
            id="email"
            className={`input ${errors.email ? 'is-danger' : ''}`}
            autoComplete="off"
            name="email"
            type="mail"
            placeholder="e.g. alexsmith@gmail.com"
            value={user.email}
            onChange={onChange}
          />
        </div>
        {errors.email && <p className="help is-danger">{errors.email}</p>}
      </div>

      <div className="field">
        <label className="label is-small" htmlFor="password">
          Mot de passe
        </label>
        <div className="control">
          <input
            id="password"
            className={`input ${errors.password ? 'is-danger' : ''}`}
            autoComplete="off"
            name="password"
            type="password"
            placeholder="make it secure"
            value={user.password}
            onChange={onChange}
          />
        </div>
        {errors.password && <p className="help is-danger">{errors.password}</p>}
      </div>

      <div className="columns">
        <div className="column">
          <div className="field is-pulled-right">
            <div className="control">
              <button
                className={`button is-info ${loading ? 'is-loading' : ''}`}
              >
                Inscription
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignupForm;
