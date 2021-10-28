import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchCard from "../searchCard/SearchCard";
import {
  getPopularMovies,
  getLatestMovies,
  getSimilarMovies,
} from "../../store/actions/movieActions";

const PopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.movies.popularMovies);
  const latestMovies = useSelector((state) => state.movies.latestMovies);
  const similarMovies = useSelector((state) => state.movies.similarMovies);

  useEffect(() => {
    dispatch(getPopularMovies());
    dispatch(getLatestMovies());
  }, [dispatch]);

  return (
    <div className='App'>
      {popularMovies?.results.map((item) => {
        return (
          <SearchCard
            key={item.id}
            id={item.id}
            title={item.title}
            posterImage={item.poster_path}
            mediaType='movie'
            name={item.name}
            profileImage={item.profile_path}
          />
        );
      })}
    </div>
  );
};

export default PopularMovies;
