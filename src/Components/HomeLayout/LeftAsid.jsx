import React, { Suspense } from 'react';
import Catagory from '../../Pages/Catagory';

const LeftAsid = () => {
    return (
        <div>
         <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
              <Catagory ></Catagory>
         </Suspense>
        </div>
    );
};

export default LeftAsid;