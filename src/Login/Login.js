import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div class="hero max-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" class="input input-bordered" />
                            <label class="label lg:flex gap-5">
                                <a href="/" class="label-text-alt link link-hover hover:red-600">Forgot password?</a>
                                <Link to='/signin' class="label-text-alt link link-hover  hover:text-red-800">Create an account</Link>
                            </label>
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;