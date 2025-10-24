import React from "react";
import {
  FaFacebook,
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { NavLink } from "react-router";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold text-lg mb-3">Find Us On</h2>
      <div className="join join-vertical w-full">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-base-200 justify-start join-item gap-2 hover:bg-base-300"
        >
          <FaFacebook className="text-blue-600" /> Facebook
        </a>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-base-200 justify-start join-item gap-2 hover:bg-base-300"
        >
          <FaInstagram className="text-pink-500" /> Instagram
        </a>

        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-base-200 justify-start join-item gap-2 hover:bg-base-300"
        >
          <FaTwitter className="text-sky-500" /> Twitter
        </a>
      </div>
    </div>
  );
};

export default FindUs;
