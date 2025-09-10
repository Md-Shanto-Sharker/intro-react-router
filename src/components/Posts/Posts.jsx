// import React, { use } from 'react';

import { useLoaderData } from "react-router";
import Post from "../Post/Post";


const Posts = () => {
    // const post = use(postsPromise)
    const post = useLoaderData()
    console.log(post);
    return (
        <div>
            <h1>This is post </h1>
            <div>
                {
                    post.map(po=><Post po={po}></Post>
                    )
                }
            </div>
        </div>
    );
};

export default Posts;