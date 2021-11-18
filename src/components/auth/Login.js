import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { movieDB, apiKey } from "../../api/movieDB";

import { getUser, setAuthError } from "../../store/actions/authActions";

import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = await movieDB.get(
        `authentication/token/new?api_key=${apiKey} `
      );
      const request_token = token?.data.request_token;

      await movieDB.post(
        `/authentication/token/validate_with_login?api_key=${apiKey}`,
        {
          username,
          password,
          request_token,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      const session = await movieDB.post(
        `authentication/session/new?api_key=${apiKey}`,
        {
          request_token,
        }
      );

      const id = await session?.data.session_id;
      localStorage.setItem("token", id);
      dispatch(getUser(id));
      dispatch(setAuthError(""));
      history.push("/");
    } catch (error) {
      console.log(error.message);
      dispatch(setAuthError(error.message));
    }
  };
  const errorMsg = useSelector((state) => state.token.error);
  const handleInput = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    if (name === "username") setUsername(value);
    if (name === "password") setPassword(value);
  };

  return (
    <>
      <div className='login'>
        <h1 className='login-header'>Please Log In</h1>
        {errorMsg && (
          <span>Username or Password are incorrect! Please try again</span>
        )}

        <form onSubmit={handleSubmit} className='login-form'>
          <label>
            <p>Username</p>
            <input
              type='name'
              name='username'
              value={username}
              onChange={handleInput}
              className='login-input'
              required
            />
          </label>
          <label>
            <p>Password</p>
            <input
              type='password'
              name='password'
              value={password}
              onChange={handleInput}
              className='login-input'
              required
            />
          </label>
          <div>
            <button type='submit' className='login-submit'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
