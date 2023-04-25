import axios from "axios";
import React, { useEffect, useState } from "react";
import HomeCarousel from "../components/Menu/Home/HomeCarousel";

const Home: React.FC = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
      )
      .then(({ data }) => {
        setMovie(data.results);
      });
  }, []);

  console.log(movie);
  return (
    <div>
      <HomeCarousel movie={movie}/>
    </div>
  );
};

export default Home;
