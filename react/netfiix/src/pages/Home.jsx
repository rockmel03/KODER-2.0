import React from "react";
import Header from "../components/Header";
import Hero from "../components/Home/Hero";
import ContentRow from "../components/Home/ContentRow";
import moviesData from "../data/movies.json";

const Home = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <Header />
      <Hero />

      <div className="space-y-12 pb-16">
        <ContentRow title="Trending Now" movies={moviesData.trending} />
        <ContentRow title="Top Picks for You" movies={moviesData.topPicks} />
        <ContentRow title="Comedy Movies" movies={moviesData.comedy} />
        <ContentRow title="Action Movies" movies={moviesData.action} />
      </div>
    </div>
  );
};

export default Home;
