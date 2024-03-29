import { ICountry, continents } from "countries-list";
import React, { useState } from "react";
import "./ContinentFilter.css";
import { TContinentCode } from "countries-list";

const ContinentFilter = (props: {
  selectedCountry: ICountry | null;
  selectedContinent: TContinentCode | null;
  setSelectedContinent: React.Dispatch<
    React.SetStateAction<TContinentCode | null>
  >;
}) => {
  const [selectedButton, setSelectedButton] = useState<TContinentCode | null>(
    null
  );
  // transforming the continents array into an array. the .entries means every key value pair has this format=> KEY:VALUE >>> element[0] will be the key and element[1] will be the value. (as seen in the map function below)
  const continentsArray = Object.entries(continents) as [
    TContinentCode,
    string
  ][];
  return (
    //wrapper containing all the continent buttons
    <div className="continents">
      {/* map function which renders a button for each continent in the continentsArray */}
      {continentsArray.map((continent, key) => {
        return (
          <button
            // there is a default class of "continent", and also an extra class is dinamically added, when the state of selectedButton equals the continent code from the current button( when current button is clicked)
            className={`continent ${
              selectedButton === continent[0] ? "continent-selected" : ""
            }`}
            key={key}
            onClick={() => {
              // if the current continent is already selected, then "unselect" the continent, meaning give it a null value. If there was none selected, or another continent, them give selectedContinent the current continents value.

              // If the clicked button's continent code is the same as the selected button's continent code, set selectedContinent and selectedButton to null, otherwise set them to the clicked button's continent code
              props.setSelectedContinent(
                selectedButton === continent[0] ? null : continent[0]
              );

              //similar here, but this adjusts the buttons class. if the current button alrea
              setSelectedButton(
                selectedButton === continent[0] ? null : continent[0]
              );
              console.log(continent[0]);
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
