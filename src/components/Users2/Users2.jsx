import React, { use } from 'react';
import User from '../User/User';

const Users2 = ({userPromise}) => {
    const users= use(userPromise);
    console.log(users);
    return (
        <div>
            <h1>This is Users2</h1>
            <div>
                {
                    users.map(user=><User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users2;