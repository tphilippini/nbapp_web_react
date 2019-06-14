import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/auth.context";
import { logout } from "../../actions/auth.action";

const Header = () => {
  const { dispatch } = useContext(AuthContext);

  return (
    <AuthContext.Consumer>
      {({ user }) => (
        <nav className="navbar is-light">
          <div className="container">
            <div className="navbar-brand">
              {user && user.email ? (
                <Link className="navbar-item" to="/dashboard">
                  App
                </Link>
              ) : (
                <Link className="navbar-item" to="/">
                  App
                </Link>
              )}
            </div>

            <div className="navbar-menu">
              {user && user.email ? (
                <div className="navbar-end">
                  <div className="navbar-item">Bonjour {user.alias}</div>
                  <div className="navbar-item">
                    <div
                      className="navbar-item"
                      onClick={() => logout(dispatch)}
                    >
                      <button className="button is-info">
                        <span>Déconnexion</span>
                        <span className="icon is-small">
                          <i className="fa fa-sign-out" />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="navbar-end">
                  <div className="navbar-item">
                    <Link className="button is-info" to="/login">
                      <span>Connexion</span>
                      <span className="icon is-small">
                        <i className="fa fa-sign-in" />
                      </span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
      )}
    </AuthContext.Consumer>
  );
};

export default Header;
