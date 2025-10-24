import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Login With</h2>
            <div className='flex flex-col gap-2'>
                <button className='btn border-red-300 hover:bg-red-200'> <FcGoogle />Login with Google</button>
                <button className='btn border-red-300 hover:bg-red-200'><FaGithub />Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;