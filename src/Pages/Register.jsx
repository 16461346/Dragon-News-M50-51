import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const {creatUser,setUser}= use(AuthContext)

  const handleRegister = (event) => {
    event.preventDefault();
    const email=event.target.email.value;
    const password=event.target.password.value;
    const form=event.target;
    const name=form.name.value;
    const image=form.image.value;
    console.log(email,password,name,image)
    creatUser(email,password)
    .then(result=>{
      const user=result.user;
      console.log(user)
      setUser(user);
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });
  };
  return (
    <div className="flex mb-10 justify-center mt-16">
      <div className="card bg-base-100  w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="flex mt-4 text-2xl justify-center font-bold">
          Register Your Account
        </h2>
        <form onSubmit={handleRegister} className=" card-body">
          <fieldset className="fieldset">

            <label className="label">Name</label>
            <input 
            type="name" 
            name="name" 
            className="input" 
            placeholder="Type your name" 
            required
            />

            <label className="label">Photo URL</label>
            <input type="text" 
            name="image" 
            className="input" 
            placeholder="Image URL"
            required
            />

            <label className="label">Email</label>
            <input type="email"
            name="email" 
            className="input" 
            placeholder="Email" 
            required
            />

            <label className="label">Password</label>
            <input type="password" 
            name="password" 
            className="input" 
            placeholder="Password" 
            required
            />

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
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
        </form>
      </div>
    </div>
  );
};

export default Register;
