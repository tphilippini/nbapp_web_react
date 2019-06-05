import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Validator from "validator";

import AuthContext from "../../contexts/auth.context";
import { login } from "../../actions/auth.action";

const LoginForm = props => {
  const [user, setUser] = useState({ email: "", password: "" });
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
      login(user, dispatch)
        .then(() => props.history.push("/dashboard"))
        .catch(err => {
          setErrors(err.response.data.errors[0]);
          setLoading(false);
        });
    }
  };

  const validate = data => {
    const err = {};
    if (!Validator.isEmail(data.email)) err.email = "This email is invalid";
    if (!data.password) err.password = "Password is mandatory";
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
        <label className="label is-small" htmlFor="email">
          Email
        </label>
        <div className="control">
          <input
            id="email"
            className={`input ${errors.email ? "is-danger" : ""}`}
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

      <div className="field">
        <label className="label is-small" htmlFor="password">
          Mot de passe
        </label>
        <div className="control">
          <input
            id="password"
            className={`input ${errors.password ? "is-danger" : ""}`}
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
        <div className="column is-half">
          <Link className="button is-text is-small" to="/forgot">
            Mot de passe oublié ?
          </Link>
        </div>
        <div className="column is-half">
          <div className="field is-pulled-right">
            <div className="control">
              <button
                className={`button is-info ${loading ? "is-loading" : ""}`}
              >
                Connexion
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
