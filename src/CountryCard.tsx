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
  // console.log(element.capital);
  // const extraInfos = () => {
  //   if (props.isExtraInfosVisible) {
  //     return (
  //       <div className="extra-infos">
  //         <p>capital: {props.country.capital}</p>
  //         <p>currency: {props.country.currency}</p>
  //       </div>
  //     );
  //   }
  // };
  return (
    <div>
      <div className="country" onClick={props.handleClick}>
        <p>{props.country.name}</p>
        <p className="flag">{countryCode ? getEmojiFlag(countryCode) : ""}</p>
      </div>
      {props.country === props.selectedCountry && (
        <CountryPopup country={props.country} />
      )}
    </div>
  );
};

export default CountryCard;
