
import './App.css';

import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Routes/Home';
import About from './Routes/About';
import Users from './Routes/Users';
import Navbarss from './Components/Navbarss';
import Footers from './Components/Footers';

export default function App() {
  return (
    <div className="App">
      <Navbarss />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Users" element={<Users />} />
      </Routes>
      <Footers />
    </div>
  );
}