import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesForHomePage } from "../../store/actions/movieActions";
import { getShowsForHomePage } from "../../store/actions/showActions";
import BackgroundCarousel from "../layout/BackgroundCarousel";
import ItemsCarousel from "../layout/ItemsCarousel";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMoviesForHomePage());
    dispatch(getShowsForHomePage());
  }, [dispatch]);

  const trendingHome = useSelector((state) => state.movies.getTrending);
  const popularMovies = useSelector((state) => state.movies.popularMovies);
  const topRatedMovies = useSelector((state) => state.movies.topRatedMovies);
  const popularShows = useSelector((state) => state.shows.popularShow);
  const topRatedShows = useSelector((state) => state.shows.topRatedShow);

  return (
    <>
      <BackgroundCarousel
        results={trendingHome}
        desc='TRENDING MOVIES / SHOWS'
      />

      <ItemsCarousel
        results={popularMovies}
        type='movie'
        heading='POPULAR MOVIES'
      />
      <ItemsCarousel
        results={topRatedMovies}
        type='movie'
        heading='TOP RATED MOVIES'
      />
      <ItemsCarousel
        results={popularShows}
        type='show'
        heading='POPULAR SHOWS'
      />

      <ItemsCarousel
        results={topRatedShows}
        type='show'
        heading='TOP RATED SHOWS'
      />
    </>
  );
};

export default Home;
