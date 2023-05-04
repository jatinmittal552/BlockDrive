
import { Route, Router, Routes } from "react-router-dom";
import Docs from "./components/Docs";
import Home from "./Home";
import Share from "./components/Share.jsx";
import Remove from "./components/Remove.jsx"
const App = () => {
  return (
    
      <Routes>
        <Route path="/docs" element={<Docs/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/share" element={<Share/>} />
        <Route path="/remove" element={<Remove/>} />
      </Routes>
      
   
  );
};

export default App;
