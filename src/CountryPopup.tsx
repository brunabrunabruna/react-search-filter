import { ICountry, languages } from "countries-list";
import React from "react";
import "./CountryPopup.css";
import { GrClose } from "react-icons/gr";

const CountryPopup = (props: {
  country: ICountry;
  flag: string | false;
  handleClick: () => void;
}) => {
  const languageName = languages[props.country.languages[0]].name;
  const languageNative = languages[props.country.languages[0]].native;
  return (
    <div className="country-popup">
      <div className="country-popup-layout">
        <GrClose onClick={props.handleClick} className="close-button" />
        <p className="country-name">{props.country.name}</p>
        <p>
          <span>Capital:</span>
          {props.country.capital ? ` ${props.country.capital}` : " -"}
        </p>
        <p>
          <span>Languages:</span>
          {/* imported the languages object */}
          {props.country.languages
            ? ` ${languageName}  ${
                languageName === languageNative ? "" : " | " + languageNative
              }`
            : "-"}
        </p>
        <p>
          <span>Currency:</span>
          {props.country.currency ? ` ${props.country.currency}` : " -"}
        </p>

        <p className="flag-popup">{props.flag}</p>
      </div>
    </div>
  );
};

export default CountryPopup;
