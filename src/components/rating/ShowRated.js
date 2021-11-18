import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRatedMovie, getRatedShow } from "../../store/actions/authActions";
import SearchCard from "../searchCard/SearchCard";

const ShowRated = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const acc_id = useSelector((state) => state.token.user?.id);
  const ratedMovie = useSelector((state) => state.token.ratedMovie);
  const ratedShow = useSelector((state) => state.token.ratedShow);
  useEffect(() => {
    dispatch(getRatedMovie(token, acc_id));
    dispatch(getRatedShow(token, acc_id));
  }, [token, acc_id, dispatch]);

  return (
    <div className='search-card'>
      <h3 className='search-card-heading'>RATED MOVIES AND TV SHOWS</h3>
      {ratedMovie?.results.map((item) => {
        return (
          <SearchCard
            key={item.id}
            id={item.id}
            mediaType='movie'
            title={item.title}
            posterImage={item.poster_path}
          />
        );
      })}

      {ratedShow?.results.map((item) => {
        return (
          <SearchCard
            key={item.id}
            id={item.id}
            mediaType='show'
            title={item.name}
            posterImage={item.poster_path}
          />
        );
      })}
    </div>
  );
};

export default ShowRated;
