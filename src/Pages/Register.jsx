import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { creatUser, setUser,updateUser } = use(AuthContext);
  const [passwordError, setPasswordError] = useState("");

   const navigate= useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;

    // ✅ পাসওয়ার্ডের pattern চেক
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).+$/;

    if (!passwordPattern.test(password)) {
      setPasswordError(
        "Password must contain at least one uppercase letter, one number, and one special character!"
      );
      return;
    } else {
      setPasswordError("");
    }

    // ✅ সব ঠিক থাকলে ইউজার তৈরি
    creatUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
       
        updateUser({displayName:name,photoURL:image}).then(()=>{
             setUser({...user,displayName:name,photoURL:image});
             navigate('/')
        })
        .catch((error)=>{
          // console.log(error)
          setUser(user)
        })
        
      })
      .catch((error) => {
        // console.log(error.message);
      });
  };

  return (
    <div className="flex mb-10 justify-center mt-16">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="flex mt-4 text-2xl justify-center font-bold">
          Register Your Account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Type your name"
              required
            />

            <label className="label">Photo URL</label>
            <input
              type="text"
              name="image"
              className="input"
              placeholder="Image URL"
              required
            />

            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />

            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              required
            />

            {/* 🔴 যদি পাসওয়ার্ড ভুল হয় তাহলে নিচে মেসেজ দেখাবে */}
            {passwordError && (
              <p className="text-red-600  mt-4">{passwordError}</p>
            )}

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>

            <p>
              If you have an account, please{" "}
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
