import React, { use } from "react";
import { NavLink } from "react-router";

const CategoryPromise = fetch("/categories.json").then((res) => res.json());

const Catagory = () => {
  const category = use(CategoryPromise);
  return (
    <div>
      <h2 className="font-bold">All Caterogy ({category.length})</h2>
      <div className="grid mt-4 grid-cols-1 pl-4 gap-2">
        {category.map((categorys) => (
          <NavLink to={`/catagory/${categorys.id}`} className={'btn border-0 hover:bg-gray-300 font-semibold text-primary  bg-white'} key={categorys.id}>{categorys.name}</NavLink>
        ))}
      </div>
    </div>
  );
};

export default Catagory;
