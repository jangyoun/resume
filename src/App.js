import "antd/dist/antd.css";
import "swiper/css";

import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./views/home/Home";
import About from "./views/About";
import User from "./views/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/user/:id' element={<User />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
