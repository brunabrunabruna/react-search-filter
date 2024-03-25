import { ICountry } from "countries-list";
import React from "react";
import "./CountryPopup.css";

const CountryPopup = (props: { country: ICountry; flag: string | false }) => {
  return (
    <div className="country-popup">
      <p>
        <span>Capital:</span> {props.country.capital}
      </p>
      <p>
        <span>Currency:</span> {props.country.currency}
      </p>
      <p className="flag-popup">{props.flag}</p>
    </div>
  );
};

export default CountryPopup;
