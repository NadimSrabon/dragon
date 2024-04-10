import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {

    const { title, _id, thumbnail_url, details } = news;
    return (
        <div className='flex flex-row justify-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='w-full' src={thumbnail_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    {
                        details.length > 200 ? <p>{details.slice(0,200)} <Link to={`/news/${_id}`}><span className='text-xl font-bold text-blue-400'>Read More...</span></Link></p> : <p>{details}</p>
                    }
                </div>
            </div>

        </div>
    );
};

export default NewsCard;