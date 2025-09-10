import React from 'react';
import { Link } from 'react-router';

const Post = ({po}) => {
    const {title,id} = po
    return (
        <div style={{border:'2px solid red',margin:'10px'}}>
            <h3>Title : {title}</h3>
           <Link to={`/posts/${id}`}>
           <button>
            Show Details</button></Link>
        </div>
    );
};

export default Post;