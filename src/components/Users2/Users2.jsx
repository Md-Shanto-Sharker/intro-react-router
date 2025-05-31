import React, { use } from 'react';

const Users2 = ({users2Promise}) => {
    const data = use(users2Promise);
    console.log(data);
    return (
        <div>
            <h1>This is users 222</h1>
        </div>
    );
};

export default Users2;