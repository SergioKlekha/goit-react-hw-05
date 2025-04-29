import React, { useState } from 'react';
import s from './SearchBar.module.css';

const SearchBar = ({ value, handleSearch }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(inputValue);
  };
  return (
    <div className={s.searchBarWrapper}>
      <h2 className={s.title}>Search for a movie...</h2>
      <form onSubmit={handleSubmit} className={s.inputWrapper}>
        <input
          type="search"
          value={inputValue}
          className={s.input}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
          placeholder="Search..."
        />
        <button type="submit" className={s.searchBtn}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;