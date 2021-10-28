import React from "react";
import { Link } from "react-router-dom";

const SearchCard = ({
  id,
  name,
  title,
  posterImage,
  mediaType,
  profileImage,
}) => {
  return (
    <>
      <Link
        to={`/${mediaType === "person" ? "actor" : mediaType}/${id}`}
        className='search-card-poster'
      >
        <img
          src={`https://image.tmdb.org/t/p/w185${posterImage || profileImage}`}
          alt='poster'
          className='search-card-poster-image'
        />
        <p className='search-card-poster-title'>{title || name}</p>
      </Link>
    </>
  );
};

export default SearchCard;
