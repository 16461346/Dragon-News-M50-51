import React from "react";
import { FaEye, FaStar } from "react-icons/fa"; // react-icons example
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  const { image_url, title, details, total_view,category_id } = news || {};

  return (
    <div className="card mx-10 pb-10 bg-base-100 shadow-xl">
      {image_url && (
        <figure>
          <img src={image_url} alt={title} className="rounded-[6px] w-full" />
        </figure>
      )}

      <div className="mt-4">
        <h2 className="text-xl font-bold leading-9">{title}</h2>
        <p className="text-gray-700 text-[16px] text-justify">{details}</p>

        {/* Rating and Views */}
        <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
          <Link
            to={`/catagory/${category_id}`}
            className="border text-white py-2 px-4 font-bold bg-[#D72050] rounded hover:bg-[#b91842] transition-colors"
          >
            ← All news in this category
          </Link>
          <p className="flex items-center gap-1 h-full">
            <FaEye className="text-lg" /> {total_view}
          </p>
        </div>

        {/* Back Button */}
      </div>
    </div>
  );
};

export default NewsDetailsCard;
