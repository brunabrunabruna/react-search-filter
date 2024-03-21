import { ICountry, getCountryCode, getEmojiFlag } from "countries-list";
import React from "react";

const CountryCard = (props: {
  country: ICountry;
  key: number;
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
      <div className="country">
        <p>{props.country.name}</p>
        <p className="flag">{countryCode ? getEmojiFlag(countryCode) : ""}</p>
      </div>
    </div>
  );
};

export default CountryCard;
