import React from 'react';

import logoImage from "../../src/assets/Images/logo.png"
import moment from 'moment';

import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='font-poppins'>

            <div className='flex flex-row justify-center mt-6'>
                <img src={logoImage} alt="" />
            </div>

            <div className='text-[18px] font-[400] text-[#706F6F] flex flex-row justify-center mt-2 '>

                <p>Journalism Without Fear or Favour</p>

            </div>

            <div>

                <p className='text-xl flex flex-row justify-center mt-2'>{moment().format('dddd, MMMM D, YYYY')}</p>

            </div>

            <div className='flex flex-row justify-center mx-44 bg-slate-300 mt-5'>

                <button className='btn btn-secondary'>Breaking !</button>
                <Marquee pauseOnHover={true} speed={100}>
                    <Link>I can be a React component, multiple React components, or just some text.</Link>
                    <br />
                    <Link>I can be a React component, multiple React components, or just some text.</Link>
                    <br />
                    <Link>I can be a React component, multiple React components, or just some text.</Link>
                </Marquee>

            </div>
        </div>
    );
};

export default Header;