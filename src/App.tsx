import { useState } from "react";
import "./App.css";
import ContinentFilter from "./ContinentFilter";
import CountryCard from "./CountryCard";

// Interfaces and types
import type {
  ICountry,
  ICountryData,
  ILanguage,
  TContinentCode,
  TCountries,
  TCountryCode,
  TLanguageCode,
} from "countries-list";

// Main data and utils
import { countries, languages } from "countries-list";
// Utils
import {
  getCountryCode,
  getCountryData,
  getCountryDataList,
  getEmojiFlag,
} from "countries-list";

function App() {
  // const wordsList: string[] = ["hi", "hello", "good", "goodbye"];
  // console.log(countries);
  // console.log(Object.values(countries));

  //state which contains the value (what is being typed) in the search input
  const [searchedTerm, setSearchedTerm] = useState("");
  const [isExtraInfosVisible, setIsExtraInfosVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<ICountry | null>(null);
  //function that handles search through our data. first it filters through the given array of data, and checks if the search bar is empty(returns all data), or if there are elements in the array that contain the searched term. If yes, it returns the element(s) in a new array.
  // secondly the new array is mapped into a div, containing each individual element, which will then be rendered into our page.
  const countriesListLayout = (countriesList: TCountries) => {
    //Object.values converts the countries object into an array, so the filter and map methods can work
    return Object.values(countriesList)
      .filter((countriesListElement) => {
        if (searchedTerm === "") {
          return countriesListElement;
        } else if (
          countriesListElement.name
            .toLowerCase()
            .includes(searchedTerm.toLowerCase())
        ) {
          return countriesListElement;
        }
      })
      .map((element, key) => {
        const handleClick = (): void => {
          setIsExtraInfosVisible(!isExtraInfosVisible);
          setSelectedCountry(element);
        };

        return (
          <CountryCard
            country={element}
            key={key}
            selectedCountry={selectedCountry}
            handleClick={handleClick}
          />
        );
      });
  };

  return (
    <>
      <div
        className="app"
        onClick={() => (selectedCountry ? setSelectedCountry(null) : "")}
      >
        <div className="nav">
          <input
            className="search-box"
            type="text"
            placeholder="search country..."
            onChange={(event) => {
              setSearchedTerm(event.target.value);
            }}
          />
          <ContinentFilter />
        </div>

        <div className="countries">{countriesListLayout(countries)}</div>
      </div>
    </>
  );
}

export default App;
