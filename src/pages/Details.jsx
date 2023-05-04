import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { BannerFind } from "../components/BannerFind";
import Trailer from "../components/Trailer";
import { FcSalesPerformance } from "react-icons/fc";
import { FcFilmReel } from "react-icons/fc";
import { FcConferenceCall } from "react-icons/fc";
import { FcFilm } from "react-icons/fc";
import { FcSpeaker } from "react-icons/fc";
import { ColorRing } from "react-loader-spinner";
import { Helmet } from "react-helmet";

function Details() {
  const params = useParams();
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${params.name}?api_key=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    console.log(detailData);
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  useEffect(() => {
    document.title = "Vision | Details";
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
        <title>Vision | Details</title>
      </Helmet>
      <NavBar />
      <BannerFind />
      <div className="detail-wrapper">
        <img
          className="image-details"
          src={`https://image.tmdb.org/t/p/w500` + details.poster_path}
          alt={details.title}
        />
        <div className="info">
          <h1 className="description-details">
            <FcFilm /> {details.original_title}
          </h1>
          <h4 className="tagline-details">
            <FcSpeaker /> "{details.tagline}"
          </h4>
          <div className="grill">
            <p className="stats">
              <FcFilmReel /> Release: {details.release_date}{" "}
            </p>
            <p className="stats">
              {" "}
              <FcSalesPerformance /> Budget: {Number(details.budget) + " $"}
            </p>
            <p className="stats">
              <FcConferenceCall /> Vote:{" "}
              {Number(details.vote_average).toFixed()}
            </p>
            <p className="paragraph-movie">{details.overview}</p>
          </div>
        </div>
      </div>
      <Trailer />
    </div>
  );
}

export default Details;
