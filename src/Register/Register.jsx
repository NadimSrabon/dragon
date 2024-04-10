import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Register = () => {

    const {registerUser} = useContext(AuthContext);

    function handleRegister(e){
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const ConfirmPassword = e.target.ConfirmPassword.value;
        console.log(name,email,password,ConfirmPassword);

        registerUser(email,password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error => {
            console.log(error.message);
        })

    }
    return (

        <div>
            <Navbar></Navbar>
            <form onSubmit={handleRegister} className='w-1/2 mx-auto'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Confirm Password</span>
                    </label>
                    <input type="password" placeholder="Re Type password" name='ConfirmPassword' className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-secondary">Register</button>
                </div>
            </form>
            <div className='mt-5'>
                <p className='text-xl text-center'>Already have an account ?  Please <Link to="/login"><span className='text-2xl font-bold text-green-400'>Login</span></Link></p>
            </div>
        </div>
    );
};

export default Register;