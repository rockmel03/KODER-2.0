import React from "react";
import CategoriesTab from "../components/CategoriesTab";
import VideoCard from "../components/VideoCard";
import { Link } from "react-router";

const Home = () => {
  return (
    <main className="relative flex-1 md:ml-0">
      <CategoriesTab />
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {[...new Array(16)].map((item, idx) => (
            <Link to={`/watch/${idx}`} key={idx}>
              <VideoCard />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
