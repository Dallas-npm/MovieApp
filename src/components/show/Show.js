import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import ShowCarousel from "./ShowCarousel";
import ActorCarousel from "../actors/ActorCarousel";
import Trailers from "../trailers/Trailers";
import ItemsCarousel from "../layout/ItemsCarousel";
import { clearShow, getShow } from "../../store/actions/showActions";

import "../layout/MovieCarousel.css";

const Show = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getShow(id));
    return () => dispatch(clearShow());
  }, [id, dispatch]);

  const show = useSelector((state) => state.shows.showById);
  const similarShows = useSelector((state) => state.shows.similarShows);
  const actors = useSelector((state) => state.shows.showActors);
  const trailers = useSelector((state) => state.shows.showTrailers);
  const recommend = useSelector((state) => state.shows.showRecommendations);

  return (
    <>
      {show && (
        <ShowCarousel
          backgroundImage={show.backdrop_path}
          name={show.name}
          status={show.status}
          genre={show.genres}
          rating={show.vote_average}
        />
      )}
      <div className='movie-section-summary'>
        <h2 className='movie-section-summary-heading'>SUMMARY</h2>
        <p className='movie-section-summary-text'>{show?.overview}</p>
      </div>

      <ActorCarousel heading='ACTORS IN THE SHOW' results={actors} />
      {similarShows && (
        <ItemsCarousel
          results={similarShows}
          type='show'
          heading='SIMILAR SHOWS'
        />
      )}
      {recommend && (
        <ItemsCarousel
          results={recommend}
          type='show'
          heading='RECOMMENDED SHOWS'
        />
      )}

      {trailers && <Trailers heading='TRAILERS FOR SHOW' results={trailers} />}
    </>
  );
};

export default Show;
