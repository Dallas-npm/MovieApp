import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import "./BackgroundCarousel.css";

const BackgroundCarousel = ({ results, desc }) => {
  const [current, setCurrent] = useState(0);
  const length = results?.results.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      nextSlide();
    }, 15000);
    return () => clearTimeout(timeout);
  });

  return (
    <div className='slider-section'>
      <FaAngleLeft className='slider-section-btn-left' onClick={prevSlide} />

      <FaAngleRight className='slider-section-btn-right' onClick={nextSlide} />

      {results?.results.map((item, index) => {
        return (
          <div
            className={index === current ? "item-active" : "item"}
            key={item.id}
          >
            {index === current && (
              <div
                style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("https://image.tmdb.org/t/p/original/${item.backdrop_path}") no-repeat`,
                }}
                className='slider-section-slide-main'
              >
                <div className='slider-section-slide-main-content'>
                  <Link
                    to={
                      item.media_type === "movie"
                        ? `/movie/${item.id}`
                        : `/show/${item.id}`
                    }
                    className='slider-section-slide-main-content-item'
                  >
                    <img
                      alt=''
                      src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                    />
                  </Link>
                  <div className='slider-section-slide-main-content-item'>
                    <h4 className='slider-section-slide-main-content-item-desc'>
                      {desc}
                    </h4>
                    <Link
                      to={
                        item.media_type === "movie"
                          ? `/movie/${item.id}`
                          : `/show/${item.id}`
                      }
                      className='slider-section-slide-main-content-item-heading'
                    >
                      {item.title || item.name}
                    </Link>
                    <p className='slider-section-slide-main-content-item-info'>
                      {item.media_type.toUpperCase()} | {item.vote_average}{" "}
                      RATING
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BackgroundCarousel;
