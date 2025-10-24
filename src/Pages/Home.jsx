import React from 'react';
import { Navigate } from 'react-router';

const Home = () => {
    return (
      <Navigate to={'/catagory/5'}></Navigate>
    );
};

export default Home;