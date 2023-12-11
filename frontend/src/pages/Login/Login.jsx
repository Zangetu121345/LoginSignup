import React, { useState } from "react";
import "./login.css";

const Login = () => {
  const [user, setuser] = useState({
    email: "",
    password: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setuser({ ...user, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className="login_main_div_page">
      <div className="login_heading">Login</div>{" "}
      <form className="login_main_div" onSubmit={submitHandler}>
        <input
          placeholder="enter email "
          type="email"
          name="email"
          value={user.email}
          onChange={(e) => changeHandler(e)}
        />

        <input
          placeholder="enter password"
          type="password"
          name="password"
          value={user.password}
          onChange={(e) => changeHandler(e)}
        />

        <button type="submit" className="login_btn">
          {" "}
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
