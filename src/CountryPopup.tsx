import { ICountry } from "countries-list";
import React from "react";

const CountryPopup = (props: { country: ICountry }) => {
  return (
    <div>
      <p>Capital: {props.country.capital}</p>
      <p>Currency: {props.country.currency}</p>
    </div>
  );
};

export default CountryPopup;
