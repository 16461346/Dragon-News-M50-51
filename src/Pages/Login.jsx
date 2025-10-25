import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex justify-center mt-16">
      <div className="card bg-base-100  w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="flex mt-4 text-2xl justify-center font-bold">Log in Your Account</h2>
        <div className="mb-4 card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
            <p>Don't have an account ? <Link className="underline font-bold text-blue-500" to={'/auth/register'}>Register</Link></p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;
