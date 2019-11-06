import React from 'react';
import { FormattedMessage } from 'react-intl';

import AuthContext from '../../contexts/auth.context';
import AccountProfileForm from './AccountProfile.form';
import AccountPasswordForm from './AccountPassword.form';
import LinkSocialForm from './LinkSocial.form';

const Account = props => {
  return (
    <AuthContext.Consumer>
      {({ user }) => (
        <section className="section">
          <div className="container">
            <div className="columns is-centered">
              <div className="column">
                <div className="columns is-vcentered">
                  <div className="column is-5">
                    <h5 className="title">
                      <FormattedMessage
                        id="account.information_0"
                        default="Basic information"
                      />
                    </h5>
                  </div>
                  <div className="column">
                    <div className="is-pulled-right">
                      <LinkSocialForm user={user} />
                    </div>
                  </div>
                </div>

                <AccountProfileForm user={user} />
              </div>
              <div className="column">
                <h5 className="title">
                  <FormattedMessage
                    id="account.information_1"
                    default="Change password"
                  />
                </h5>
                <AccountPasswordForm user={user} />
              </div>
            </div>
          </div>
        </section>
      )}
    </AuthContext.Consumer>
  );
};

export default Account;
