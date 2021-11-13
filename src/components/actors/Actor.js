import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ActorBackground from "./ActorBackground";
import ActorMoviesShows from "./ActorMoviesShows";
import { clearActor, getActor } from "../../store/actions/actorActions";
import { useParams } from "react-router";
import "../layout/BackgroundCarousel.css";

const Actor = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getActor(id));
    return () => dispatch(clearActor());
  }, [id, dispatch]);
  const actor = useSelector((state) => state.actors.actor);
  const moviesShows = useSelector((state) => state.actors.actorMoviesShows);

  return (
    <>
      {actor && (
        <ActorBackground
          profileImage={actor.profile_path}
          birthday={actor.birthday}
          deathday={actor.deathday}
          name={actor.name}
          department={actor.known_for_department}
        />
      )}

      {actor && (
        <div className='actor-bio'>
          <h2 className='actor-bio-heading'>BIOGRAPHY</h2>
          <p className='actor-bio-text'>{actor.biography}</p>
          <h2 className='actor-bio-heading'>POPULAR ROLES</h2>
        </div>
      )}

      {moviesShows?.cast.map((item) => {
        return (
          <ActorMoviesShows
            key={item.id}
            id={item.id}
            title={item.title}
            name={item.name}
            overview={item.overview}
            posterImage={item.poster_path}
            character={item.character}
            mediaType={item.media_type}
          />
        );
      })}
    </>
  );
};

export default Actor;
