import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../actions/user.action";
const Register = (props) => {
  const dispatch = useDispatch();
  const [user, updateUser] = useState({});
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(createUser(user))
    .then((res) => {
      if (res.data.status === 200) {
        window.location.href = "/";
      }
    });
    
    
  };
  return (
    <div className="page">
      <h1 className="page-title">Register</h1>
      <form className="register" onSubmit={(e) => submitForm(e)}>
        <label>Nama</label>
        <input
          type="text"
          autoComplete={"false"}
          placeholder="Nama "
          onChange={(e) => {
            updateUser({ ...user, name: e.target.value });
          }}
        />
        <label>Label</label>
        <input
          type="text"
          autoComplete={"false"}
          placeholder="Label"
          onChange={(e) => {
            updateUser({ ...user, label: e.target.value });
          }}
        />
        <label>Link Profile</label>
        <input
          type="text"
          autoComplete={"false"}
          placeholder="ex. http://fb.com/image.png"
          onChange={(e) => {
            updateUser({ ...user, picture: e.target.value });
          }}
        />
        <label>Email</label>
        <input
          type="email"
          autoComplete={"false"}
          placeholder="email"
          onChange={(e) => {
            updateUser({ ...user, email: e.target.value });
          }}
        />
        <label>No Hp</label>
        <input
          type="text"
          autoComplete={"false"}
          placeholder="Phone"
          onChange={(e) => {
            updateUser({ ...user, phone: e.target.value });
          }}
        />
        <label>Website</label>
        <input
          type="text"
          autoComplete={"false"}
          placeholder="Link web"
          onChange={(e) => {
            updateUser({ ...user, website: e.target.value });
          }}
        />
        <label>Summary</label>
        <textarea
          rows="5"
          autoComplete={"false"}
          placeholder="summary..."
          onChange={(e) => {
            updateUser({ ...user, summary: e.target.value });
          }}
        ></textarea>
        <label>Password</label>
        <input
          type="password"
          autoComplete={"false"}
          placeholder="password"
          onChange={(e) => {
            updateUser({ ...user, password: e.target.value });
          }}
        />
        <button type="submit" onClick={(e) => submitForm(e)}>
          Register
        </button>
      </form>
    </div>
  );
};
export default Register;
