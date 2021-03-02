import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Contact(props) {
  const [users, setUser] = useState([]);
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(" http://localhost:3003/users");
    setUser(result.data.reverse());
    console.log(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUser();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Contact List</h1>
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>
                  <Link to="" className="btn btn-primary ml-4" to={`/user/${user.id}`}>
                    view
                  </Link>
                  <Link
                    to=""
                    className="btn btn-warning mr-2"
                    to={`/user/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    to=""
                    className="btn btn-danger ml-4"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Contact;
