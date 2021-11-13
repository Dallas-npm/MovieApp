import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { searchMoviesShows } from "../../store/actions/movieActions";
import SearchCard from "../searchCard/SearchCard";

const SearchResults = () => {
  const dispatch = useDispatch();
  const searchRes = useSelector((state) => state.movies.searchMoviesShows);

  const { name } = useParams();

  useEffect(() => {
    dispatch(searchMoviesShows(name));
  }, [name, dispatch]);

  return (
    <div className='search-card'>
      <h1 className='search-card-heading'>
        SEARCH RESULTS FOR {name.toUpperCase()}
      </h1>
      <div className='search-card-line' />
      {searchRes?.results.length === 0 && (
        <p className='search-card-not-found'>No Results For Your Search</p>
      )}
      <div className='search-card-content'>
        {searchRes?.results.map((item) => {
          return (
            <SearchCard
              key={item.id}
              id={item.id}
              posterImage={item.poster_path}
              title={item.title}
              name={item.name}
              mediaType={item.media_type}
              profileImage={item.profile_path}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SearchResults;
