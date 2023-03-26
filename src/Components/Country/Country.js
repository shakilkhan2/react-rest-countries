import React from "react";
import "./Country.css";

const Country = (props) => {
  const { area, region, name, population, flags } = props.country;
  return (
    <div className="country bg-warning border border-info text-emphasis">
      <h2>Country Name: {name.common} </h2>
      <img src={flags.png} alt="country-flag" />
      <h3>Region: {region}</h3>
      <h4>Area: {area}</h4>
      <h5>Population: {population}</h5>
    </div>
  );
};

export default Country;
