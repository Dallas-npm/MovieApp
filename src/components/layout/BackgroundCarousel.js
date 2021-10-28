import React, { useState } from "react";

import "./BackgroundCarousel.css";

const BackgroundCarousel = ({ results }) => {
  const [current, setCurrent] = useState(0);
  const length = results.length;

  return (
    <div className='slider-section'>
      {results?.results.map((item) => {
        return (
          <div
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("https://image.tmdb.org/t/p/original/${item.backdrop_path}") no-repeat`,
            }}
            className='slider-section-slide-main'
          ></div>
        );
      })}
    </div>
  );
};

export default BackgroundCarousel;
