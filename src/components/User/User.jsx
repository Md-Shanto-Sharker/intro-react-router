import React from "react";
import { Link } from "react-router";
import UserDetails from "../UserDetails/UserDetails";

const User = ({ user }) => {
  const { name, email, phone } = user;
  return (
    <div
      style={{
        border: "2px solid red",
        padding: "5px",
        margin: "10px",
      }}
    >
      <h5>{name}</h5>
      <p>{email}</p>
      <p>
        <small>Phone : {phone}</small>
      </p>

      <Link to={`/user/${user.id}`}> show Details</Link>
    </div>
  );
};

export default User;
