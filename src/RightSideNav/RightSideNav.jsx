import React from 'react';

import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

import picOne from "../../src/assets/Images/qZone1.png"
import picTwo from "../../src/assets/Images/qZone2.png"
import picThree from "../../src/assets/Images/qZone3.png"

const RightSideNav = () => {
    return (
        <div>

            <div className='w-[282px] h-[182px] p-4 font-poppins'>

                <p className='font-bold text-2xl'>Login With</p>

                <div className='mt-2 ml-5'>
                    <button className='btn bg-slate-300 border-blue-400'><FcGoogle></FcGoogle> Login With Google</button>
                </div>
                <div className='mt-2 ml-5'>
                    <button className='btn btn-outline border-black'><BsGithub></BsGithub> Login With Github</button>
                </div>
            </div>

            <div className='w-[282px] h-[182px] p-4 font-poppins mt-5'>

                <p className='font-bold text-2xl pb-4'>Find Us On</p>

                <div className='space-y-2'>
                    <a className='flex justify-center items-center gap-2' href="">
                        <FaFacebookSquare></FaFacebookSquare>
                        <span className='text-xl text-center'>Facebook</span>
                    </a>
                    <hr />
                    <a className='flex justify-center items-center gap-2 -translate-x-4' href="">
                        <FaTwitter></FaTwitter>
                        <span className='text-xl'>Twitter</span>
                    </a>
                    <hr />
                    <a className='flex justify-center items-center gap-2' href="">
                        <RiInstagramFill></RiInstagramFill>
                        <span className='text-xl'>Instagram</span>
                    </a>
                </div>
                <hr />
            </div>

            <div className='p-4 space-y-3 mb-6'>

                <h2 className='text-3xl pt-6'>Q Zone</h2>

                <img src={picOne} alt="" />
                <img src={picTwo} alt="" />
                <img src={picThree} alt="" />

            </div>
        </div>
    );
};

export default RightSideNav;