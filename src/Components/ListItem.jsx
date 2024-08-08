import React from 'react'

const ListItem = ({className, item}) => {
  return (
    <li className={className}>{item}</li>
  )
}

export default ListItem