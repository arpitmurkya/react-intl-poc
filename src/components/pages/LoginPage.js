import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import CommonSection from "./CommonSection";

class LoginPage extends React.Component {

  render() {
    return (
      <div>
        <div className="container" style={{ height: "100vh" }}>
          <div className="row align-items-center" style={{ height: "100vh" }}>
            <div className="col col-xs-12 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3">
              <div className="card">
                <h2 className="card-header">
                  <FormattedMessage
                    id="login.title"
                    defaultMessage="Welcome Back! (Fallback option)"
                  />
                </h2>
                <div className="card-body">
                  <small className="form-text text-center">
                    <Link to="/signup">Sign up</Link> if you don't have an account<br />
                  </small>
                </div>
                <CommonSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
