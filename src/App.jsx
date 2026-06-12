import { Routes, Route, NavLink } from "react-router-dom";
import NavBar from "./components/Nav.jsx";
import Home from "./pages/Home.jsx";
import Fav from "./pages/Fav.jsx";
import { MovieProvider } from "./context/MovieContext.jsx";

export default function App() {
  return <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/fav" element={<Fav/>}/>
    </Routes>
  </>
}