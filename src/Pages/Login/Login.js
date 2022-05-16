import React from 'react';

const Login = () => {
    return (
        <div className='card card-compact w-96 bg-base-100 shadow-xl mx-auto'>
            <h1 className='text-center text-[20px]'>Login</h1>
            <div className='mx-[29px]'>
                <div class="form-control w-full max-w-xs mb-5">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input type="text" class="input input-bordered w-full max-w-xs" />
                </div>
            </div>
            <div className='mx-[29px]'>
                <div class="form-control w-full max-w-xs mb-5">
                    <label class="label">
                        <span class="label-text">Password</span>
                    </label>
                    <input type="password" class="input input-bordered w-full max-w-xs" />
                </div>
            </div>
            <div className='mx-auto mb-4'>
                <button class="btn btn-accent ">Input</button>
            </div>

            <p className=' mx-[29px]'>new To Doctor Portal ? <a href="/SignUp"> Creat Account </a> </p>

        </div>
    );
};

export default Login;