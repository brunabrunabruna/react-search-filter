import { ICountry } from "countries-list";
import React from "react";
import "./CountryPopup.css";
import { GrClose } from "react-icons/gr";

const CountryPopup = (props: {
  country: ICountry;
  flag: string | false;
  handleClick: () => void;
}) => {
  return (
    <div className="country-popup">
      <div className="country-popup-layout">
        <GrClose onClick={props.handleClick} className="close-button" />
        <p className="country-name">{props.country.name}</p>
        <p>
          <span>Capital:</span>
          {props.country.capital ? ` ${props.country.capital}` : "-"}
        </p>
        <p>
          <span>Currency:</span>
          {props.country.currency ? ` ${props.country.currency}` : "-"}
        </p>
        <p>
          <span>Continent:</span>
          {props.country.continent ? ` ${props.country.continent}` : "-"}
        </p>
        <p className="flag-popup">{props.flag}</p>
      </div>
    </div>
  );
};

export default CountryPopup;
