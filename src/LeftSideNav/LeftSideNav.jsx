import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {

    const [categories , setCategories] = useState([]);

    useEffect(() => {
        fetch("categories.json")
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className='font-poppins text-2xl font-bold space-y-5'>
            <p>All Categories :  {categories.length}</p>

            <div className='space-y-4'>
                {
                    categories.map(category => <Link className='block ml-4 text-xl font-semibold text-[#9F9F9F]'>{category.name}</Link>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;