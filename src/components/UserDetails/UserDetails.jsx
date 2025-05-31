import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const data = useLoaderData();
    console.log(data);
    const {website,name} = data;
    

    return (
        <div>
            <h1>User details here</h1>
            <p>Website : {website}</p>
            <p>Name : {name}</p>
        </div>
    );
};

export default UserDetails;