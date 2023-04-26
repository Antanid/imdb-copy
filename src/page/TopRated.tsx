import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardPopular from "../components/CardPopular/CardPopular";
import { addTopRated, setTopRated } from "../redux/TopRatedSlice";

const TopRated = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
      )
      .then(({ data }) => dispatch(addTopRated(data.results)));
  }, [dispatch]);
  const topRatedMovie = useSelector(setTopRated);
  return (
    <div>
      <CardPopular movieRedux={topRatedMovie} title="TOP RATED" isLoading={false}/>
    </div>
  );
};

export default TopRated;
