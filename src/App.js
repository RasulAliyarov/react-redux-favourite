import Costumers from "./pages/Costumers/Costumers";
import Favourites from "./pages/Favourites/Favourites";
import Home from "./pages/Home/Home";

import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/costumers" element={<Costumers />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
