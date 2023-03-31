import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Ticketlogo from "../../src/Ticketlogo.png";

import "../CSS/LoginPage.css";

const LoginPage = () => {
  const [credential, setCredential] = useState({
    userName: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    // const { name, value } = event.target;
    // let prevCred = credential
    // prevCred[name] = value
    // setCredential(prevCred);
    const { name, value } = event.target;
    setCredential({ ...credential, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    debugger;
    const { userName, password } = credential;
    const validationErrors = {};
    const validationName = /^[a-zA-Z]+$/;
    if (!validationName.test(userName)) {
      validationErrors.userName = "User Name only required alphabets";
    }

    if (Object.keys(validationErrors).length == 0) {
      axios({
        method: "post",
        url: "https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=4f9c88cba0f853da15747d779ac6e2fc",
        data: {
          username: userName,
          password,
          request_token: "aac6d4efc675390eed807389392b63c5f3461778",
        },
      })
        .then(function (response) {
          debugger;
          if (response?.data?.success) {
            navigate("/homepage");
          }
        })
        .catch(function (error) {
          setErrors({ credentialerror: "Credentials Errors" });
        });
    }
    setErrors(validationErrors);
  };

  return (
    <>
      <div className="LoginContainer">
        <header>
          <img src={Ticketlogo} alt="TicketLogo"></img>
        </header>
        <div className="mainContent">
          <bold>
            <h2>Sign In</h2>
          </bold>
          <p>Sign In To Your Self Service Portal </p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              required
              onChange={handleInput}
              name="userName"
              value={credential.userName}
            ></input>
            {errors.userName && <span>{errors.userName}</span>}
            <input
              type="password"
              placeholder="Password"
              required
              onChange={handleInput}
              name="password"
              value={credential.password}
            ></input>
            <button className="SubmitButton"> LOGIN</button>
          </form>
          {errors.credentialerror && <span>{errors.credentialerror}</span>}
        </div>
      </div>
    </>
  );
};

export default LoginPage;
