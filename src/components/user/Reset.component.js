import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ResetForm from "./Reset.form";

import { validateToken } from "../../actions/auth.action";

const Reset = props => {
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
		validateToken(props.match.params.token)
			.then(() => {
				setLoading(false);
				setSuccess(true);
			})
      .catch(() => {
				setLoading(false);
				setSuccess(false);
			});
    // eslint-disable-next-line
  }, []);

  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half">
              <div className="box">
                <h1 className="title has-text-centered">
                  Réinitialisation mot de passe
                </h1>

                {loading &&
                  <article className="message is-info">
                    <div className="message-body">
                      Chargement...
                    </div>
                  </article>
                }

                {!loading && success &&
                  <ResetForm {...props} token={props.match.params.token} />
                }

                {!loading && !success &&
                  <div className="has-text-centered">
                    <article className="message is-danger">
                      <div className="message-body">
                        Accès non valide
                      </div>
                    </article>
                    <Link className="button is-info" to="/">Retour</Link>
                  </div>
                }                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reset;