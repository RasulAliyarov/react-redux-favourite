import Costumers from "./pages/Costumers/Costumers";
import Favourites from "./pages/Favourites/Favourites";
import Home from "./pages/Home/Home";

import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Detail from "./pages/Detail/Detail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/costumers" element={<Costumers />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
