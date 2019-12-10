import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Validator from 'validator';

import { forgot } from '../../stores/actions/auth.action';

const ForgotForm = props => {
  const [user, setUser] = useState({ email: '' });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState({});
  const [loading, setLoading] = useState(false);

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    const err = validate(user);
    setErrors(err);
    if (Object.keys(err).length === 0) {
      setLoading(true);
      forgot(user)
        .then(() => {
          setMessage({
            text: 'An email has been sent with success',
            type: 'success'
          });
          setTimeout(() => {
            setMessage({});
            setLoading(false);
            props.history.push('/login');
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
    if (!Validator.isEmail(data.email)) err.email = 'This email is invalid';
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
        <label className="label is-small" htmlFor="email">
          Email
        </label>
        <div className="control">
          <input
            id="email"
            className={`input ${errors.email ? 'is-danger' : ''}`}
            autoComplete="off"
            autoFocus
            name="email"
            type="mail"
            placeholder="e.g. alexsmith@gmail.com"
            value={user.email}
            onChange={onChange}
          />
        </div>
        {errors.email && <p className="help is-danger">{errors.email}</p>}
      </div>

      <div className="columns">
        <div className="column is-half">
          <Link className="button is-text is-small" to="/login">
            Retour à la connexion
          </Link>
        </div>
        <div className="column is-half">
          <div className="field is-pulled-right">
            <div className="control">
              <button
                className={`button is-info ${loading ? 'is-loading' : ''}`}
              >
                Envoyer
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ForgotForm;
