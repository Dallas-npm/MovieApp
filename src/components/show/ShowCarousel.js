import React from "react";
import "../layout/MovieCarousel.css";
const ShowCarousel = ({ backgroundImage, name, status, genre, rating }) => {
  return (
    <div
      className='movie-section'
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("https://image.tmdb.org/t/p/original/${backgroundImage}") no-repeat`,
      }}
    >
      <div className='movie-section-content'>
        <h4 className='movie-status'>{status}</h4>
        <h1 className='movie-title'>{name}</h1>
        <p className='movie-rating'>
          {genre[0].name} | {rating} RATING
        </p>
      </div>
    </div>
  );
};

export default ShowCarousel;
