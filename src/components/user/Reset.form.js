import React, { useState} from "react";
import { reset } from "../../actions/auth.action";

const ResetForm = props => {
  const [user, setUser] = useState({
		token: props.token,
		password: '',
		confirm_password: ''
	});

	console.log(props)

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
      reset(user)
				.then(() => {
					setMessage({text: "Your password has been updated with success", type: 'success'});
					setTimeout( () => {
						setMessage({});
						setLoading(false)
						props.history.push("/login")
				}, 1000);
				})
        .catch(err => {
          setErrors(err.response.data.errors[0]);
          setLoading(false);
        });
    }
  };

  const validate = data => {
    const err = {};
		if (!data.password) err.password = "Can't be blank";
		if (!data.confirm_password) err.confirm_password = "Can't be blank";
		if (data.password !== data.confirm_password)
			err.confirm_password = "Passwords must match";
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
        <article className={`message is-${message.type ? message.type : ""}`}>
          <div className="message-body">{message.text}</div>
        </article>
			)}
			<div className="field">
				<label className="label is-small" htmlFor="password">
					Nouveau mot de passe
				</label>
				<div className="control">
					<input
						id="password"
						className={`input ${errors.password ? 'is-danger' : ''}`}
						name="password"
						type="password"
						placeholder="your new password"
						value={user.password}
						onChange={onChange}
					/>
				</div>
        {errors.password && <p className="help is-danger">{errors.password}</p>}
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
						placeholder="type it again, please"
						value={user.confirm_password}
						onChange={onChange}
					/>
				</div>
        {errors.confirm_password && <p className="help is-danger">{errors.confirm_password}</p>}
			</div>

      <div className="columns">
        <div className="column">
          <div className="field is-pulled-right">
            <div className="control">
              <button
                className={`button is-info ${loading ? "is-loading" : ""}`}
              >
                Réinitialiser
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ResetForm;
