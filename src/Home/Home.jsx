import React from 'react';
import Header from '../Hrader/Header';
import Navbar from '../Navbar/Navbar';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import RightSideNav from '../RightSideNav/RightSideNav';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Home = () => {

    const news = useLoaderData();
    console.log(news);
    return (
        <div className='font-poppins'>

            <div>
                <Header></Header>
                <Navbar></Navbar>
            </div>

            <div className='mx-8 grid grid-cols-4 gap-6 mt-5'>
                <div className='border-4'>
                    <LeftSideNav></LeftSideNav>
                </div>

                <div className='lg:col-span-2 border-4 space-y-7'>
                    {
                        news.map(anews => <NewsCard news={anews}></NewsCard>)
                    }
                </div>

                <div className='border-4'>
                    <RightSideNav></RightSideNav>
                </div>
            </div>

        </div>
    );
};

export default Home;