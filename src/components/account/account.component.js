import React from "react";
import { FormattedMessage } from "react-intl";

import AuthContext from "../../contexts/auth.context";
import AccountForm from "./account.form";

const Account = props => {
  return (
    <AuthContext.Consumer>
      {({ user }) => (
        <section className="section">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-half">
                <div className="box">
                  <h1 className="title has-text-centered">
                    <FormattedMessage id="account.title" default="My account" />
                  </h1>
                  <AccountForm user={user} />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </AuthContext.Consumer>
  );
};

export default Account;
