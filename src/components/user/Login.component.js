import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./Login.form";

const Login = props => {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half">
              <div className="box">
                <h1 className="title has-text-centered">Connexion</h1>
                <LoginForm {...props} />
              </div>
              <div className="is-pulled-right">
                <span>
                  Nouveau ?
                  <Link className="button is-text" to="/signup">
                    Inscris-toi
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
