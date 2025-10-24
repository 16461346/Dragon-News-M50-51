import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import QZon from './QZon';

const RightAsid = () => {
    return (
        <div className=''>
           <SocialLogin></SocialLogin>
           <div className='mt-10'><FindUs></FindUs></div>
           <div className='mt-10'><QZon></QZon></div>
        </div>
    );
};

export default RightAsid;