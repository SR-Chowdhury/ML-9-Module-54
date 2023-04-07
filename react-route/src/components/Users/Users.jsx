import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';

const Users = () => {

    const users = useLoaderData();

    return (
        <div className='mt-10'>
            <h1>This is <span className='text-purple-800'>Users</span> Page</h1> 
            <div className='grid gap-4 grid-cols-3 mt-10'>
                {
                    users.map(user => <User key={user.id} user = {user} />)
                }
            </div>
        </div>
    );
};

export default Users;    