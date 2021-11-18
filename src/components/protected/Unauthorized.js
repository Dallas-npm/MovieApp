import React from "react";
import { Link } from "react-router-dom";
import "./Unauthorized.css";

const Unauthorized = () => {
  return (
    <div className='not-found'>
      <h3 className='not-found-heading'>Unauthorized Access</h3>
      <h4 className='not-found-text'>Please Login to access this page</h4>
      <Link className='not-found-link' to='/login'>
        Login
      </Link>
    </div>
  );
};

export default Unauthorized;
