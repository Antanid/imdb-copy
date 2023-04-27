import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardPopular from "../components/CardPopular/CardPopular";
import { addTopRated, setTopRated } from "../redux/TopRatedSlice";

const TopRated = () => {
  const dispatch = useDispatch();
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    const getApi = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          "https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
        );
        dispatch(addTopRated(data.results));
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getApi();
  }, [dispatch]);
  const topRatedMovie = useSelector(setTopRated);
  return (
    <div>
      <CardPopular movieRedux={topRatedMovie} title="TOP RATED" Loading={Loading} />
    </div>
  );
};

export default TopRated;
