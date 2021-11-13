import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const ActorCarousel = ({ heading, results }) => {
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
            {results?.cast.map((item) => {
              return (
                item.profile_path && (
                  <Link
                    key={Math.random() * 10000}
                    className='item-slider-content-poster'
                    to={`/actor/${item.id}`}
                  >
                    <img
                      key={item.id}
                      alt=''
                      src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
                    />
                    <div className='items-slider-content-poster-rating'>
                      {item.name}
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

export default ActorCarousel;
