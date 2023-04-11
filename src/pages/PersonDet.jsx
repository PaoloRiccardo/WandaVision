import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { BannerFind } from "../components/BannerFind";
import { FcHome } from "react-icons/fc";
import { RiCake2Fill } from "react-icons/ri";
import { FcVip } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { ColorRing } from "react-loader-spinner";

/*import Trailer from "../components/Trailer";*/


function PersonDet() {
    const params = useParams();
    const [details, setDetails] = useState({});
    const [loading, setLoading] = useState(false)
    useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 1500)
    },[])
    
    const fetchDetails = async () => {
      
      const data = await fetch(
        `https://api.themoviedb.org/3/person/${params.name}?api_key=${process.env.REACT_APP_API_KEY}`
      )
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
  
    return (
      loading?
      <ColorRing
  visible={true} 
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />
      :
        <div>
        <NavBar/>
        <BannerFind/>
      <div className="detail-wrapper">
          <img className="img-person" src={`https://image.tmdb.org/t/p/w500` + details.profile_path} alt={details.title}/>
        <div className="info">
        <h1 className="description-details"><FcVip/> {details.name}</h1>
        <h4 className="tagline-details"><FcBusinessman/> {details.known_for_department}</h4>
        <div className="grill">
            <p className="stats"><RiCake2Fill/> Born: {details.birthday} </p> 
            <p className="stats"><FcHome/> Place: {details.place_of_birth}</p>
          <p className="paragraph-movie">{details.biography}</p>
          </div>
        </div>
      </div>
      </div>
    );
  }
  

  export default PersonDet;