import React from "react";
import { Link, useNavigate } from "react-router";
import UserDetails from "../UserDetails/UserDetails";

const User = ({ user }) => {
  const { name, email, phone ,id} = user;

  const navigate = useNavigate()
  const handleNavigate =()=>{
      navigate(`/user/${user.id}`)
  }
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

      <button onClick={handleNavigate}>Details of : {id}</button>
    </div>
  );
};

export default User;
