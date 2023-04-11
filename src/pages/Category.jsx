import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { BannerCategory } from "../components/BannerCategory";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Category () {
  const [category, setCategory] = useState([]);
  let params = useParams();

  const getCategory = async (name) => {
    const data = await fetch(
        `https://api.themoviedb.org/3/trending/${name}/day?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`); 
    const trending = await data.json();
    setCategory(trending.results);
  };

  useEffect(() => {
   getCategory(params.genre);
    console.log(params.genre);
  }, [params.genre]);

  useEffect(() => {
    document.title = "Vision | Category";
  }, []);

  return (
    <div className="Category">
    <NavBar/>
    <BannerCategory/>
    <div className="grid">
      {category.map((item) => {
        return(
          <motion.div className="card-movie" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} key={item.id}>
              <Link to={`/details/${item.id}`}>   
            <img className="movies-tv" src={`https://image.tmdb.org/t/p/w500` + item.backdrop_path} alt="" />
            </Link>
            <Link to={`/persondet/${item.id}`}>
            <img className="profile-img" src={`https://image.tmdb.org/t/p/w500` + item.profile_path} alt="" />
            </Link>
            <h4 className="category-title">{item.title}{item.name}</h4>
         
          </motion.div>
        )
      })}
    </div>
    </div>
  );
}