import React, { Suspense, useState } from "react";
import { Link, useNavigate, useNavigation } from "react-router";
import UserDetails from "../UserDetails/UserDetails";
import UserDetails2 from "../UserDetails2/UserDetails2";

const User = ({ user }) => {
  const [showInfo, setShowInfo] = useState(false);
  // const [visiteHome,setVisitHome] =useState(false)

  const navigate2 = useNavigate()
  const visitHome =()=>{
      navigate2('/')
  }
  const { name, email, phone, id } = user;

  const userPromise = fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  ).then((res) => res.json());

  
  const handleNavigate = () => {
    navigate(`/user/${user.id}`);
  };

  const navigate = useNavigate();
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
      <button onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? "Hide" : "Details"} info :{" "}
      </button>

      {showInfo && (
        <Suspense fallback={<span>Loading...</span>}>
          <UserDetails2 userPromise={userPromise}></UserDetails2>
        </Suspense>
      )}

      <button onClick={visitHome} type="button">Visit Home</button>
    </div>
  );
};

export default User;
