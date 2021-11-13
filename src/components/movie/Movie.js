import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieCarousel from "../layout/MovieCarousel";
import { useParams } from "react-router";
import { clearMovie, getMovieContent } from "../../store/actions/movieActions";
import ItemsCarousel from "../layout/ItemsCarousel";
import ActorCarousel from "../actors/ActorCarousel";
import Trailers from "../trailers/Trailers";

import "../layout/MovieCarousel.css";

const Movie = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getMovieContent(id));
    return () => dispatch(clearMovie());
  }, [id, dispatch]);

  const movie = useSelector((state) => state.movies.movieById);
  const movieActors = useSelector((state) => state.movies.movieActors);
  const movieTrailer = useSelector((state) => state.movies.movieTrailer);
  const similarMovies = useSelector((state) => state.movies.similarMovies);

  return (
    <>
      {movie && (
        <MovieCarousel
          backgroundImage={movie.backdrop_path}
          title={movie.title}
          status={movie.status}
          genre={movie.genres}
          rating={movie.vote_average}
        />
      )}

      <div className='movie-section-summary'>
        <h2 className='movie-section-summary-heading'>SUMMARY</h2>
        <p className='movie-section-summary-text'>{movie?.overview}</p>
      </div>

      <ActorCarousel heading='ACTORS IN THE MOVIE' results={movieActors} />

      {similarMovies && (
        <ItemsCarousel
          results={similarMovies}
          type='movie'
          heading='SIMILAR MOVIES'
        />
      )}

      {movieTrailer && (
        <Trailers heading='TRAILERS FOR MOVIE' results={movieTrailer} />
      )}
    </>
  );
};

export default Movie;
