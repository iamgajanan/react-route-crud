import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link, useHistory, useParams } from "react-router-dom";
const UserInfo = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await Axios.get(`http://localhost:3003/users/${id}`);
    console.log(result);
    setUser(result.data);
  };
  return (
    <div className="container py-4">
      
      <h1 className="display-4">UserId: {id}</h1>
      <hr />
      <ul className="list-group w-200">
        <li className="list-group-item">Name: {user.name}</li>
        <li className="list-group-item">Email: {user.email}</li>
        <li className="list-group-item">Phone: {user.phone}</li>
      </ul>

      <Link className="btn btn-primary mt-3" to="/">
        Back to Home
      </Link>
    </div>
  );
};

export default UserInfo;
