import React from "react";
import { Link } from "react-router-dom";
import SignupForm from "./Signup.form";

const Signup = props => {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half">
              <div className="box">
                <h1 className="title has-text-centered">Inscription</h1>
                <SignupForm {...props} />
              </div>
              <div className="is-pulled-right">
                <span>
                  Déjà un compte chez nous ?
                  <Link className="button is-text" to="/login">
                    Connecte-toi
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

export default Signup;
