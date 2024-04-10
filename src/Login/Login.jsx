import React, { useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {

    const {loginUser} = useContext(AuthContext);

    const location = useLocation();

    const navigate = useNavigate();

    function handleLogin(e){
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);

        loginUser(email,password)
        .then(result =>{
            console.log(result.user);
        })

        navigate(location?.state? location.state: "/")



        .catch(error => {
            console.log(error.message);
        })

    }
    return (
        <div>
            <Navbar></Navbar>

            <div>
                <form onSubmit={handleLogin} className='w-1/2 mx-auto'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <div className='mt-5'>
                <p className='text-xl text-center'>Do not have an account ?  Please <Link to="/register"><span className='text-2xl font-bold text-red-600'>Register</span></Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;