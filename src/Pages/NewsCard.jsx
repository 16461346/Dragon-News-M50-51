import React from "react";
import { FaShareAlt, FaEye, FaStar, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {id, title, author, thumbnail_url, details, rating, total_view } =
    news;

  return (
    <div className="card bg-base-100 shadow-md  rounded-lg overflow-hidden">
      {/* Author Info & Share Icon */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10  h-10 rounded-full border"
          />
          <div>
            <h3 className="font-semibold text-sm">{author.name}</h3>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <FaRegBookmark />
          <FaShareAlt className="text-gray-500 cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* Title */}
      <div className="px-4">
        <h2 className="font-bold text-lg leading-snug mb-2">{title}</h2>
      </div>

      {/* Thumbnail */}
      <figure>
        <img
          src={thumbnail_url}
          alt={title}
          className=" rounded-[8px] h-56 object-cover"
        />
      </figure>

      {/* Details */}
      <div className="p-4">
        <p className="text-sm text-gray-600 mb-2">
          {details.slice(0, 180)}...
          <Link to={`/news-details/${id}`} className="text-orange-600 font-semibold cursor-pointer">
            Read More
          </Link>
        </p>

        {/* Rating & Views */}
        <div className="flex items-center justify-between border-t pt-3 mt-2 text-sm">
          <div className="flex items-center gap-1 text-orange-500">
            {[...Array(Math.round(rating.number))].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="text-gray-700 font-medium ml-1">
              {rating.number}
            </span>
          </div>

          <div className="flex items-center gap-1 text-gray-500">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
