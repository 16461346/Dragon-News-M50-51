import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center mt-16">
      <div className="card bg-base-100  w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="flex mt-4 text-2xl justify-center font-bold">
         Register Your Account
        </h2>
        <div className="mb-4 card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input type="name" className="input" placeholder="Type your name" />
            <label className="label">Photo URL</label>
            <input type="text" className="input" placeholder="Image URL" />
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <button className="btn btn-neutral mt-4">Register</button>
            <p>
              If you have an account, please ?{" "}
              <Link
                className="underline font-bold text-blue-500"
                to={"/auth/login"}
              >
                Login
              </Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Register;
