import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loadable from "../components/Loader/Loadable";

const Home = Loadable(lazy(() => import("../views/Home")));
const DogDetails = Loadable(lazy(() => import("../views/DogDetails")));

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dog-details" element={<DogDetails />} />
    </Routes>
  );
};

export default Navigation;
