import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import CommonSection from "./CommonSection";

const SignupPage = () => (
  <div className="container" style={{ height: "100vh" }}>
    <div className="row align-items-center" style={{ height: "100vh" }}>
      <div className="col col-xs-12 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3">
        <div className="card">
          <h2 className="card-header">
            <FormattedMessage
              id="signup.title"
              defaultMessage="Join the Club! (Fallback title)"
            />
          </h2>
          <h5 style={{ display: 'flex', justifyContent: 'center' }}>
            <FormattedMessage
              id="signup.subtitle"
              defaultMessage="Signup Page subtitle! (Fallback Subtitle)"
            />
          </h5>
          <div className="card-body">
            <small className="form-text text-center">
              <Link to="/login">LOGIN</Link> if you have an account
            </small>
          </div>
          <CommonSection />
        </div>
      </div>
    </div>
  </div>
);

export default SignupPage;
