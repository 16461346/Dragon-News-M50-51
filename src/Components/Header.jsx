import React from 'react';
import img1 from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
  return (
      <>
      <div className="flex flex-col gap-1 items-center justify-center my-4">
        <img src={img1} alt="logo" />
         <p className="text-primary">Journalism Without Fear or Favour</p>
             <p className="text-secondary">{format(new Date(),('EEEE , MMMM d ,yyyy'))}</p>
      </div>
     
    </>
  );
};

export default Header;
