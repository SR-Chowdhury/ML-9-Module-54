import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const User = ({user}) => {
    
    const {id, name, username, website} = user;
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/user-details/${id}`);
    }
    
    return (
        <div className='p-5 border flex flex-col'>
            <h2 className='font-bold text-lg'>{name}</h2>
            <h3 className='font-light'>{username}</h3>
            <h6 className='text-sm mb-10'>{website}</h6>
            <button onClick={handleNavigate} className='w-full my-3 mt-auto'>Navigate</button>
            <Link to={`/user-details/${id}`}><button className='w-full mt-auto'>Show details</button></Link>
        </div>
    );
};

export default User;