import React, { use } from 'react';

const Users2 = ({userPromise}) => {
    const users= use(userPromise);
    console.log(users);
    return (
        <div>
            <h1>This is Users2</h1>
        </div>
    );
};

export default Users2;