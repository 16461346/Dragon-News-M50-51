import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Pages/NewsCard";

const CategoryNews = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const ConvertedID = parseInt(id);

  const [categoreNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (ConvertedID === 0) {
      setCategoryNews(data);
      return;
    } else if (ConvertedID === 1) {
      const Filter = data.filter((news) => news.others.is_today_pick == true);
      setCategoryNews(Filter);
    } else {
      const Filter = data.filter((news) => news.category_id === ConvertedID);
      // console.log(Filter);
    }
    const Filter = data.filter((news) => news.category_id === ConvertedID);
    // console.log(Filter);
    setCategoryNews(Filter);
  }, [data, ConvertedID]);
  return (
    <div>
      <h2>
        {" "}
        Total{" "}
        <span className="text-pink-500 font-bold">
          {categoreNews.length}
        </span>{" "}
        News-Found
      </h2>
      <div className="grid grid-cols-1 mt-10 gap-6">
        {
            categoreNews.map(news=><NewsCard key={news.id} news={news}></NewsCard>)
        }
      </div>
    </div>
  );
};

export default CategoryNews;
