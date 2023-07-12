import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardPopular from "../components/CardPopular/CardPopular";
import { fetchFilms } from "../redux/MenuLiCat/asyncActions";
import { selectedLanguage } from "../redux/ChangeLanguageSlice";
import { setTopRated, setTopRatedStatus } from "../redux/MenuLiCat/TopRatedSlice";

const TopRated = () => {
  const dispatch = useDispatch();
  const language = useSelector(selectedLanguage);
  const status = useSelector(setTopRatedStatus)


  useEffect(() => {
    const movieCateg = 'top_rated';
    // const getApi = async () => {
    //   try {
    //     setLoading(false);
    //     const { data } = await axios.get(
    //       `https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=${language}`
    //     );
    //     dispatch(addTopRated(data.results));
    //     setLoading(true);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // getApi();
     // @ts-ignore: Unreachable code error
    dispatch(fetchFilms({language, movieCateg}))
  }, [dispatch, language]);
  const topRatedMovie = useSelector(setTopRated);
  return (
    <div>
      <CardPopular title="TOP RATED" movieRedux={topRatedMovie} Loading={status} />
    </div>
  );
};

export default TopRated;
