import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";

const UserDetails = () => {
  const data = useLoaderData();

  const params = useParams();
  console.log(params.userId);
  //   const { userId } = useParams();
  //   console.log(userId);
  const { website, name } = data;

  const navigate = useNavigate();

  return (
    <div>
      <h1>User details here</h1>
      <p>Website : {website}</p>
      <p>Name : {name}</p>

      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default UserDetails;
