import React from "react";
import Landing from "../components/Landing";
import Highlights from "../components/Highlights";
import Features from "../components/Featured";
import Explore from "../components/Explore";

const Home = () => {
  return (
    <>
      <Landing />
      <main>
        <Highlights />
        <Features />
        <Explore />
      </main>
    </>
  );
};

export default Home;
