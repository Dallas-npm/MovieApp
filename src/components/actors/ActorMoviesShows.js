import React from "react";
import { Link } from "react-router-dom";

import "./ActorMoviesShows.css";

const ActorMoviesShows = ({
  id,
  title,
  name,
  overview,
  posterImage,
  character,
  mediaType,
}) => {
  return (
    <div className='actor-roles'>
      <div className='actor-roles-header'>
        {posterImage && (
          <Link to={`/${mediaType}/${id}`}>
            <img
              src={`https://image.tmdb.org/t/p/original/${posterImage}`}
              alt=''
              className='actor-roles-image'
            />
          </Link>
        )}

        <div className='actor-roles-info'>
          <Link to={`/${mediaType}/${id}`} className='actor-roles-title'>
            {title || name}
          </Link>
          <h4 className='actor-roles-char'>{character}</h4>
        </div>
      </div>
      <p className='actor-roles-overview'>{overview}</p>
    </div>
  );
};

export default ActorMoviesShows;
