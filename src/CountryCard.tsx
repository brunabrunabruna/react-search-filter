import { ICountry, getCountryCode, getEmojiFlag } from "countries-list";
import React from "react";
import CountryPopup from "./CountryPopup";

const CountryCard = (props: {
  country: ICountry;
  key: number;
  selectedCountry: ICountry | null;
  handleClick: () => void;
}) => {
  const countryCode = getCountryCode(props.country.name);
  let countryFlag: string | false;
  if (countryCode) {
    countryFlag = getEmojiFlag(countryCode);
  } else {
    countryFlag = false;
  }
  return (
    <div>
      <div className="country" onClick={props.handleClick}>
        <p>{props.country.name}</p>
        <p className="flag">{countryCode ? countryFlag : ""}</p>
      </div>
      {props.country === props.selectedCountry && (
        <CountryPopup country={props.country} flag={countryFlag} />
      )}
    </div>
  );
};

export default CountryCard;
