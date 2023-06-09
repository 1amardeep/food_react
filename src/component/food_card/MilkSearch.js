import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../stores";

const MilkSearch = () => {
  const searchTerm = useSelector((state) => state.milks.searchTerm);
  const dispatch = useDispatch();
  const handleSearchTerm = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  };
  return (
    <div>
      <div>Search Milk</div>
      <input type="text" value={searchTerm} onChange={handleSearchTerm} />
    </div>
  );
};

export default MilkSearch;
