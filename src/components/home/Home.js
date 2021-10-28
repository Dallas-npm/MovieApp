import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesForHomePage } from "../../store/actions/movieActions";
import { getShowsForHomePage } from "../../store/actions/showActions";
import BackgroundCarousel from "../layout/BackgroundCarousel";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMoviesForHomePage());
    dispatch(getShowsForHomePage());
  }, [dispatch]);

  const trendingHome = useSelector((state) => state.movies.getTrending);
  const popularMovies = useSelector((state) => state.movies.popularMovies);
  const topRatedMovies = useSelector((state) => state.movies.topRatedMovies);
  const popularShows = useSelector((state) => state.shows.popularShows);
  const topRatedShows = useSelector((state) => state.shows.topRatedShows);

  return (
    <>
      <div>
        {trendingHome?.results.map((item) => {
          return <BackgroundCarousel results={trendingHome} />;
        })}
      </div>
    </>
  );
};

export default Home;
