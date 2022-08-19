import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth,email,password).then((userCredential)=>{
        // signed in
        const user = userCredential.user
        console.log(user);
    })
    // firebase login
  };


  const register = (e) => {
    e.preventDefault()

    // firebase register
  };
  return (
    <div className="login">
      <Link to={"/"}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
          className="login_logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign-In</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={"email@gmail.com"}
          />

          <h5>Password</h5>
          <input
            type="password"
            placeholder="strong password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login_signInButton" onClick={signIn}>
            Sign-In
          </button>
        </form>
        <p>
          By signing-In you agree to the AMAZON FAKE CLONE conditions of use &
          sale. Please see our privacy notice, our cookies notice and our
          interest-based ads notice.
        </p>
        <button className="login_registerButton" onClick={register}>
          Create your Amazon Acount
        </button>
      </div>
    </div>
  );
};
