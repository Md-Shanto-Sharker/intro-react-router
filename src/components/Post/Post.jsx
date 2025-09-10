import React from "react";
import { Link, useNavigate } from "react-router";

const Post = ({ po }) => {
  const { title, id } = po;

    const navigate = useNavigate()

  const handleNavigate=()=>{
        navigate(`/posts/${id}`)
  }
  return (
    <div style={{ border: "2px solid red", margin: "10px" }}>
      <h3>Title : {title}</h3>
      <Link to={`/posts/${id}`}>
        <button>Show Details</button>
      </Link>

      <button onClick={handleNavigate}>Details of : {id}</button>
    </div>
  );
};

export default Post;
