import React, { use } from 'react';
import User from '../User/User';

const Users2 = ({users2Promise}) => {
    const users = use(users2Promise);
    
    return (
        <div>
            <h1>This is users 222</h1>

            <div>
                {
                    users.map(user=><User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users2;