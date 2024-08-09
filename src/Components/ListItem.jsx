import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ className, item, to }) => {
  return (
    <li className={className}>
      <Link to={to}>{item}</Link>
    </li>
  );
};

export default ListItem;
