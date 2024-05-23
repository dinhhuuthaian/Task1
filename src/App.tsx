import Home from "home/Home";
import "./App.css"
import { Route, Routes } from "react-router";
import ProducDetail from "productDetail/ProducDetail";
import { BrowserRouter } from "react-router-dom";
import cartDetail from "cartDetail";

function App() {
  return (
    <BrowserRouter>
          <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/ProductDetail" Component={ProducDetail}/> 
          <Route path="/cartDetail" Component={cartDetail}/>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
