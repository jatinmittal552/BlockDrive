
import { Route, Router, Routes } from "react-router-dom";
import Docs from "./components/Docs";
import Home from "./Home";
const App = () => {
  return (
    
      <Routes>
        <Route path="/docs" element={<Docs/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
      
   
  );
};

export default App;
