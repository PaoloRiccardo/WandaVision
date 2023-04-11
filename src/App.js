import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Pages/>
      </BrowserRouter>
    </div>
  );
}

export default App;
