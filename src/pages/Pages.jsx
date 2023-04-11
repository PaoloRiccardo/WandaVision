import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Category from "./Category";
import Series from "./Series";
import Searched from "./Searched";
import Details from "./Details";
import PersonDet from "./PersonDet";
import SerieDet from "./SerieDet";


function Pages() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:genre" element={<Category />} />
        <Route path="/series/:genre" element={<Series />} />
        <Route path="/searched/:search" element={<Searched/>} />
        <Route path="/details/:name" element={<Details/>} />
        <Route path="/persondet/:name" element={<PersonDet/>}/>
        <Route path="/seriedet/:name" element={<SerieDet/>}/>


      </Routes>
  );
}

export default Pages;