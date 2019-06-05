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
                  <div className="navbar-item">{user.email}</div>
                  <div className="navbar-item">
                    <div
                      aria-hidden
                      className="navbar-item"
                      onClick={() => logout(dispatch)}
                    >
                      Déconnexion
                    </div>
                  </div>
                </div>
              ) : (
                <div className="navbar-end">
                  <Link className="navbar-item" to="/login">
                    Connexion
                  </Link>
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
