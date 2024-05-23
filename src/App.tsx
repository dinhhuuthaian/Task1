import Home from "home/Home";
import "./App.css"
import { Route, Routes } from "react-router";
import ProducDetail from "productDetail/ProducDetail";
import { HashRouter } from "react-router-dom";
import cartDetail from "cartDetail";

function App() {
  return (
<<<<<<< HEAD
    <BrowserRouter>
          <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/ProductDetail" Component={ProducDetail}/> 
          <Route path="/cartDetail" Component={cartDetail}/>
          </Routes>
    </BrowserRouter>
=======
    <HashRouter basename="/">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/ProductDetail" Component={ProducDetail} />
        <Route path="/cartDetail" Component={cartDetail} />
      </Routes>
    </HashRouter>
>>>>>>> cf6a33d212b5899f6f550a92b1b64cfc904a31f3
  );
}

export default App;
