import React, { useState } from "react";
import "./signup.css";
import { toast } from "react-toastify";
import axios from "axios";

const SignUp = () => {
  const [user, setuser] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
    retype_password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setuser({ ...user, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/auth/signup", {
        ...user,
        roles: ["user"],
      });
      const data = res.json();
      console.log("data", data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="login_main_div_page">
      <div className="login_heading">Signup</div>{" "}
      <form className="login_main_div" onSubmit={submitHandler}>
        <input
          placeholder="enter name "
          type="text"
          name="username"
          value={user.username}
          onChange={(e) => changeHandler(e)}
        />
        <input
          placeholder="enter email "
          type="email"
          name="email"
          value={user.email}
          onChange={(e) => changeHandler(e)}
        />
        <input
          placeholder="enter mobile number "
          type="tel"
          name="mobile"
          value={user.mobile}
          onChange={(e) => changeHandler(e)}
        />

        <input
          placeholder="create password"
          type="password"
          name="password"
          value={user.password}
          onChange={(e) => changeHandler(e)}
        />
        <input
          placeholder="re-type password"
          type="password"
          name="retype_password"
          value={user.retype_password}
          onChange={(e) => changeHandler(e)}
        />

        <button type="submit" className="login_btn">
          {" "}
          Sigup
        </button>
      </form>
    </div>
  );
};

export default SignUp;
