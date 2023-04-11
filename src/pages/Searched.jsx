import React from 'react';
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import { NavBar } from '../components/NavBar';
import { BannerFind } from "../components/BannerFind";
import Search from '../components/Search';


function Searched () {


    const [searchedMovie, setSearchedMovie] = useState ([]);
    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${name}`)
        const  res = await data.json();
        setSearchedMovie(res.results);
    };


    useEffect (() => {
         getSearched(params.search);
    }, [params.search]);

    useEffect(() =>{
      document.title = "Vision | Searched";
    }, []);
    

    return (
        <div>
        <NavBar/>
        <BannerFind/>
        <Search/>
      <div className='grid-find'>
        {searchedMovie.map(({ title, id, poster_path }) => (
          <div className='find-card' key={id}>
            <Link to={`/details/${id}`}>
              <img className='find-poster' src={`https://image.tmdb.org/t/p/w500` + poster_path} alt={title} />
              <h4 className='title-find'>{title}</h4>
            </Link>
          </div>
        ))}
      </div>
      </div>
    );
}





export default Searched;