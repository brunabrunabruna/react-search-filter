import { ICountry, continents } from "countries-list";
import React from "react";
import "./ContinentFilter.css";
import { TContinentCode } from "countries-list";

const ContinentFilter = (props: {
  selectedCountry: ICountry | null;
  selectedContinent: TContinentCode | null;
  setSelectedContinent: React.Dispatch<
    React.SetStateAction<TContinentCode | null>
  >;
}) => {
  const continentsArray = Object.entries(continents) as [
    TContinentCode,
    string
  ][];

  return (
    <div className="continents">
      {continentsArray.map((continent, key) => {
        return (
          <button
            className="continent"
            key={key}
            onClick={() => {
              props.setSelectedContinent(continent[0]);
            }}
          >
            {continent[1]}
          </button>
        );
      })}
    </div>
  );
};

export default ContinentFilter;
