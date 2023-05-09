import { Routes, Route } from "react-router";
import "./App.css";
import Menu from "./components/Menu/Menu";
import Home from "./page/Home";
import Movie from "./page/Movie";
import Popular from "./page/Popular/Popular";
import Search from "./page/Search";
import TopRated from "./page/TopRated";
import Upcoming from "./page/Upcoming";


function App() {
  return (
    <div className="wrapper">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="popular" element={<Popular />} />
        <Route path="upcoming" element={<Upcoming />} />
        <Route path="top_rated" element={<TopRated />} />
        <Route path="movies/:id" element={<Movie />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
