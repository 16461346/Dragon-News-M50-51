import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-2 bg-gray-100 p-2">
      <p className="bg-secondary py-1 px-4">Latest</p>
      {/* এখানে p-এর পরিবর্তে div ব্যবহার করা হলো */}
      <div className="text-[#403F3F] font-bold flex-1">
        <Marquee pauseOnHover={true}>
          Lorem ipsum dolor sit amet consectetur adipisicingolestiae, elit. M Lorem ipsum?
        </Marquee>
      </div>
    </div>
  );
};

export default LatestNews;
