import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setuser] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setuser({ ...user, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/auth/signin", {
        ...user,
      });
      const data = res.data;
      toast.success(data.message);
      if (data.message != "Invalid Password!") {
        navigate("/home");
      }
      console.log("data", data);
    } catch (e) {
      toast.error(e.response.data.message);
    }
  };

  return (
    <div className="login_main_div_page">
      <div className="login_heading">Login</div>{" "}
      <form className="login_main_div" onSubmit={submitHandler}>
        <input
          placeholder="enter email "
          type="text"
          name="username"
          value={user.username}
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
