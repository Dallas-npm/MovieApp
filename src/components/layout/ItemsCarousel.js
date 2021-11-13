import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import "./ItemsCarousel.css";

const ItemsCarousel = ({ results, heading, type }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        top: 0,
        left: -900,
        behavior: "smooth",
      });
    }
  };
  const scrollRight = () => {
    if (scrollRef.current !== null) {
      scrollRef.current.scrollBy({
        top: 0,
        left: 900,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className='item-slider'>
      {results && (
        <>
          <FaAngleLeft
            onClick={scrollLeft}
            className='item-slider-btn btn-left'
          />

          <h3 className='item-slider-heading'>{heading}</h3>
          <div className='item-slider-content' ref={scrollRef}>
            {results?.results.map((item) => {
              return (
                item.poster_path && (
                  <Link
                    key={item.id}
                    className='item-slider-content-poster'
                    to={
                      type === "movie"
                        ? `/movie/${item.id}`
                        : `/show/${item.id}`
                    }
                  >
                    <img
                      key={item.id}
                      alt=''
                      src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                    />
                    <div className='items-slider-content-poster-rating'>
                      {item.vote_average} <i className='fas fa-star' />
                    </div>
                  </Link>
                )
              );
            })}
          </div>
          <FaAngleRight
            onClick={scrollRight}
            className='item-slider-btn btn-right'
          />
          <div className='item-slider-line'></div>
        </>
      )}
    </div>
  );
};

export default ItemsCarousel;
