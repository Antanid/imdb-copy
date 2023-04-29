import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import CardPopular from "../components/CardPopular/CardPopular";
import { addUpcoming, setUpcomingMovie } from "../redux/UpcomingFilmSlice";

const Upcoming: React.FC = () => {
  const { upcoming } = useParams();
  const dispatch = useDispatch();
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    const getApi = async (upcoming: string | undefined) => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${upcoming}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
          `
        );
        dispatch(addUpcoming(data.results));
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getApi(upcoming);
  }, [dispatch, upcoming]);
  const UpcomingFilm = useSelector(setUpcomingMovie);
  return (
    <div>
      <CardPopular title="UPCOMING" movieRedux={UpcomingFilm} Loading={Loading} />
    </div>
  );
};

export default Upcoming;
