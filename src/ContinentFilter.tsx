import { continents } from "countries-list";
import React from "react";
import "./ContinentFilter.css";

const ContinentFilter = () => {
  const continentsArray = Object.values(continents);
  console.log(continentsArray);
  console.log(continents);

  return (
    <div className="continents">
      {continentsArray.map((continent) => {
        return <button className="continent">{continent}</button>;
      })}
    </div>
  );
};

export default ContinentFilter;
