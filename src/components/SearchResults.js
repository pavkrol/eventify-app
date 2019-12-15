import React from "react";

const SearchResults = ({ searchBy, searchValue }) => {
  return (
    <div>
      <p>{searchBy}</p>
      <p>{searchValue}</p>
    </div>
  );
};

export default SearchResults;
