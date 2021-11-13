import React from "react";

import "./Trailers.css";

const Trailers = ({ results, heading }) => {
  return (
    <div className='trailer-content'>
      <h3 className='trailer-content-heading'>{heading}</h3>
      {results?.results.map((item) => {
        return (
          <iframe
            key={item.key}
            className='trailer-content-video'
            title='Trailer'
            src={`https://www.youtube.com/embed/${item.key}`}
          />
        );
      })}
    </div>
  );
};

export default Trailers;
