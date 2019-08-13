import React from "react";
import ResetForm from "./Reset.form";

const Reset = props => {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half">
              <div className="box">
                <h1 className="title has-text-centered">Réinitialisation mot de passe</h1>
                <ResetForm {...props} token={props.match.params.token} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reset;