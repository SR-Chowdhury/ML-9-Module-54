import React from 'react';
import { Link, Outlet, useNavigation } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Home = () => {

    const navigation = useNavigation();

    return (
        <div>
            <div className='flex gap-10 justify-center'>
                <ActiveLink to="/">Home</ActiveLink>
                <ActiveLink to="/about">About</ActiveLink>
                <ActiveLink to="/users">Users</ActiveLink>
                <ActiveLink to="/contact">Contact</ActiveLink>
            </div>

            {/* Loader */}
            <div>
                {navigation.state === 'loading' && 'Loading.....'}  
            </div>

            <Outlet/>
        </div>
    );
};

export default Home;    