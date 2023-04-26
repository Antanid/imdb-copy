import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardPopular from "../components/CardPopular/CardPopular";
import { addUpcoming, setUpcomingMovie } from "../redux/UpcomingFilmSlice";

const Upcoming: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
      )
      .then(({ data }) => dispatch(addUpcoming(data.results)));
  }, [dispatch]);
  const UpcomingFilm = useSelector(setUpcomingMovie);
  console.log(UpcomingFilm);
  return (
    <div>
      <CardPopular title='UPCOMING' movieRedux={UpcomingFilm} isLoading={false}/>
    </div>
  );
};

export default Upcoming;
