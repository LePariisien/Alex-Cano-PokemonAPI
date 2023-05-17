import React from 'react';

const SearchBar = ({ value, onChange }) => (
  <input
    type="text"
    value={value}
    onChange={e => onChange(e.target.value)}
    placeholder="Trouver votre Pokemon"
  />
);

export default SearchBar;