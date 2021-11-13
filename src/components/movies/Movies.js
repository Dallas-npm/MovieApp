import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesContent } from "../../store/actions/movieActions";
import BackgroundCarousel from "../layout/BackgroundCarousel";
import ItemsCarousel from "../layout/ItemsCarousel";

const Movies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesContent());
  }, [dispatch]);

  const movieTrending = useSelector((state) => state.movies.movieTrending);
  const topRatedMovies = useSelector((state) => state.movies.topRatedMovies);
  const popularMovies = useSelector((state) => state.movies.popularMovies);
  const upcomingMovies = useSelector((state) => state.movies.upcomingMovies);
  const nowPlayingMovies = useSelector(
    (state) => state.movies.nowPlayingMovies
  );

  return (
    <>
      <BackgroundCarousel results={movieTrending} desc='MOVIE TRENDING' />
      <ItemsCarousel
        results={topRatedMovies}
        type='movie'
        heading='TOP RATED MOVIES'
      />
      <ItemsCarousel
        results={nowPlayingMovies}
        type='movie'
        heading='NOW PLAYING MOVIES'
      />
      <ItemsCarousel
        results={popularMovies}
        type='movie'
        heading='POPULAR MOVIES'
      />
      <ItemsCarousel
        results={upcomingMovies}
        type='movie'
        heading='UPCOMING MOVIES'
      />
    </>
  );
};

export default Movies;
