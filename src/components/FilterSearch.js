import React, { Component } from 'react'

const FilterSearch = (props) => {

  return(
    <div>
      <label>Greased: </label>
      <input type="checkbox"
      value={props.filterByGreasedState}
      onClick={props.greaseHogs} />
    </div>
  )

}

export default FilterSearch
