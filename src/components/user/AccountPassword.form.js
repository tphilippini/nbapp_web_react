import React, { useState, useContext } from 'react';

import AuthContext from '../../contexts/auth.context';
import { patch } from '../../actions/user.action';

const AccountPasswordForm = props => {
  const [user, setUser] = useState({
    password: '',
    new_password: '',
    confirm_password: ''
  });
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
      patch({ ...props.user, ...user }, 'password', dispatch)
        .then(() => {
          setMessage({
            text: 'Your password has been updated with success',
            type: 'success'
          });
          setTimeout(() => {
            setMessage({});
            setUser({
              password: '',
              new_password: '',
              confirm_password: ''
            });
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
    if (!data.password) err.password = "Can't be blank";
    if (!data.new_password) err.new_password = "Can't be blank";
    if (data.new_password !== data.confirm_password)
      err.confirm_password = 'Passwords must match';
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
        <label className="label is-small" htmlFor="password">
          Mot de passe actuel
        </label>
        <div className="control">
          <input
            id="password"
            className={`input ${errors.password ? 'is-danger' : ''}`}
            name="password"
            type="password"
            value={user.password}
            onChange={onChange}
          />
        </div>
        {errors.password && <p className="help is-danger">{errors.password}</p>}
      </div>

      <div className="field">
        <label className="label is-small" htmlFor="newPassword">
          Nouveau mot de passe
        </label>
        <div className="control">
          <input
            id="newPassword"
            className={`input ${errors.new_password ? 'is-danger' : ''}`}
            name="new_password"
            type="password"
            value={user.new_password}
            onChange={onChange}
          />
        </div>
        {errors.new_password && (
          <p className="help is-danger">{errors.new_password}</p>
        )}
      </div>

      <div className="field">
        <label className="label is-small" htmlFor="confirmPassword">
          Confirmation du mot de passe
        </label>
        <div className="control">
          <input
            id="confirmPassword"
            className={`input ${errors.confirm_password ? 'is-danger' : ''}`}
            name="confirm_password"
            type="password"
            value={user.confirm_password}
            onChange={onChange}
          />
        </div>
        {errors.confirm_password && (
          <p className="help is-danger">{errors.confirm_password}</p>
        )}
      </div>

      <div className="columns">
        <div className="column">
          <div className="field is-pulled-right">
            <div className="control">
              <button
                className={`button is-info ${loading ? 'is-loading' : ''}`}
              >
                Mise à jour
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AccountPasswordForm;
