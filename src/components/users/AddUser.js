import Axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const AddUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });
  let history = useHistory();
  const [records, setRecords] = useState([]);
  const { name, email, phone } = user;
  const OnInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };
  const submitted = async (e) => {
    e.preventDefault();
    const newRecords = { ...user, id: new Date().getTime().toString() };
    console.log(records);
    setRecords([...records, newRecords]);
    console.log("Submited value: " + records);
    setUser({ name: "", email: "", phone: "" });
    await Axios.post("http://localhost:3003/users", user);
    history.push("/");
    console.log("Added");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add Contact</h2>
        <form onSubmit={submitted}>
          <div className="mb-3">
            <label className="form-label">Name {user.name}</label>
            <input
              type="name"
              className="form-control"
              name="name"
              onChange={OnInputChange}
              value={user.name}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email {user.email}</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={user.email}
              onChange={OnInputChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">phone {user.phone}</label>
            <input
              type="tel"
              className="form-control"
              name="phone"
              value={user.phone}
              onChange={OnInputChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        {records.map((rec) => {
          return (
            <div>
              <p>{rec.name}</p>
              <p>{rec.email}</p>
              <p>{rec.phone}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddUser;
