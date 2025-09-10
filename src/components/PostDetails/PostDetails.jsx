import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const posts = useLoaderData()
    const {id,title} = posts
    return (
        <div>
            <h3>{id}</h3>
            <h4>{title}</h4>
        </div>
    );
};

export default PostDetails;