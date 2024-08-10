import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({className, name, onClick, to}) => {
  //  if (to) {
  //    return (
  //      <Link to={to} className={className}>
  //        {name}
  //      </Link>
  //    );
  //  }
  return <div className={className} onClick={onClick}>
    <Link to={to}>{name}</Link>
    </div>;
}

export default Button