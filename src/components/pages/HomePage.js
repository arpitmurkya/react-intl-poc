import React from "react";
import { Redirect } from "react-router-dom";

const HomePage = () => (
  <div className="text-center">
    <Redirect to="/signup" />
  </div>
);

export default HomePage;
