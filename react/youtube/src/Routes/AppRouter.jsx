import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import WatchVideo from "../pages/WatchVideo";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="watch/:id" element={<WatchVideo />} />
    </Routes>
  );
};

export default AppRouter;
