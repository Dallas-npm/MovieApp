import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./Search.css";

const Search = () => {
  const [text, setText] = useState("");
  const history = useHistory();
  const onInputChange = (e) => {
    setText(e.target.value);
  };

  const onSearch = (e) => {
    e.preventDefault();
    history.push(`/search/${text}`);
    setText("");
  };

  return (
    <form onSubmit={onSearch}>
      <div className='search-bar'>
        <i className='fas fa-search search-bar-icon' />
        <input
          type='text'
          value={text}
          onChange={onInputChange}
          className='search-bar-input'
        />
      </div>
    </form>
  );
};

export default Search;
