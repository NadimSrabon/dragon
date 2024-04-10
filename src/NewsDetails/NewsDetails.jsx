import React from 'react';
import Header from '../Hrader/Header';
import Navbar from '../Navbar/Navbar';
import RightSideNav from '../RightSideNav/RightSideNav';
import { useLoaderData, useParams } from 'react-router-dom';

const NewsDetails = () => {

    const news = useLoaderData();
    const params = useParams();

    const test = news.find(item => item._id == params._id)
    const {thumbnail_url} = test;

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className='grid md: grid-cols-4'>

                <div className='col-span-3'>

                    <img src={thumbnail_url} alt="" />

                </div>

                <div>
                    <RightSideNav></RightSideNav>
                </div>

            </div>
        </div>
    );
};

export default NewsDetails;