import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import RightAsid from '../Components/HomeLayout/RightAsid';
import NewsDetailsCard from '../Components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data= useLoaderData();
    const {id}=useParams();
    const [news,setNews]= useState({});

    useEffect(()=>{

        const newsdata=data.find((singleNews)=>singleNews.id==id);
        setNews(newsdata);

    },[data,id])
    
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto mt-10 grid grid-cols-12'>
                <section className='col-span-9'>
                    <h2 className='font-bold pb-10'>News Details</h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3 sticky'>
                    <RightAsid></RightAsid>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;<header><Header></Header></header>