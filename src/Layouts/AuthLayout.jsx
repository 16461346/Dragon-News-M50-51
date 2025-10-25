import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const AuthLayout = () => {
    return (
        <>
        <div className='w-11/12 mx-auto bg-gray-100 min-h-screen'>
            <header> <Navbar/></header>
             <main>
                <Outlet></Outlet>
             </main>
        </div>
         <footer ><Footer></Footer></footer>
        </>
    );
};

export default AuthLayout;