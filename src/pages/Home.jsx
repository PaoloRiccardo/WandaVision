import { NavBar } from "../components/NavBar";
import { Banner } from "../components/Banner";
import { PopularMovie } from "../components/PopularMovie";
import React, { useEffect } from "react";
import Search from "../components/Search";
import { useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { Helmet } from "react-helmet";

function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return loading ? (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
    />
  ) : (
    <div>
      <Helmet>
        <title> Vision | Home </title>
      </Helmet>
      <NavBar />
      <Banner />
      <Search />
      <PopularMovie />
    </div>
  );
}

export default Home;
