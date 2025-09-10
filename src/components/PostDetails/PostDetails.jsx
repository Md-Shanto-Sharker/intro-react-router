import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const PostDetails = () => {
  const posts = useLoaderData();
  const navigate = useNavigate();
  // const handleback =()=>{
  //   navigate('/')
  // }
  const { id, title } = posts;
  return (
    <div>
      <h3>{id}</h3>
      <h4>{title}</h4>
      <button onClick={()=>navigate(-1)}>back</button>
    </div>
  );
};

export default PostDetails;
