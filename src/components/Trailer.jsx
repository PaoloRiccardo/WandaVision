import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

function Trailer() {
  const params = useParams();
  const [videos, setVideos] = useState([]);

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${params.name}/videos?api_key=${process.env.REACT_APP_API_KEY}`
    );
    const videos = await data.json();
    console.log(
      videos.results.find((vid) => vid.name === "Official Trailer" || "Teaser")
    );
    setVideos(
      videos.results.find((vid) => vid.name === "Official Trailer" || "Teaser")
    );
  };

  useEffect(() => {
    fetchDetails();
    setVideos(videos);
  }, [params.name]);

  return (
    <div>
      <h1 className="trailer-presentation"> Trailer:</h1>
      <YouTube className="video-container" videoId={videos.key} />
    </div>
  );
}

export default Trailer;
