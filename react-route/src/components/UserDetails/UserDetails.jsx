import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UserDetails = () => {

    const user = useLoaderData();
    const navigate = useNavigate();

    const handleGoBack= () => {
        navigate(-1);
    }

    return (
        <div className='mt-10'>
            <h1>User Details:</h1>
            <h2 className='font-bold text-lg'>{user.name}</h2>
            <h3 className='font-light'>{user.username}</h3>
            <h6 className='text-sm mb-10'>{user.website}</h6>
            <button onClick={handleGoBack} className='w-full my-3 mt-auto'>Go Back</button>
        </div>
    );
};

export default UserDetails;