import React from "react";
import ForgotForm from "./Forgot.form";

const Forgot = props => {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half">
              <div className="box">
                <h1 className="title has-text-centered">Mot de passe oublié ?</h1>
                <ForgotForm {...props} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forgot;