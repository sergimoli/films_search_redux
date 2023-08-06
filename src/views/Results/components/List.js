import React from "react";
import ListItem from "./ListItem";

function List({ data, onListItemClick }) {
  return data?.map((movie) => (
    <ListItem key={movie.id} {...movie} onListItemClick={onListItemClick} />
  ));
}

export default List;
