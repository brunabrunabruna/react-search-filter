import { useState } from "react";
import "./App.css";
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
import { continents, countries, languages } from "countries-list";
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
  console.log(Object.values(countries));

  //state which contains the value (what is being typed) in the search input
  const [searchedTerm, setSearchedTerm] = useState("");

  //function that handles search through our data. first it filters through the given array of data, and checks if the search bar is empty(returns all data), or if there are elements in the array that contain the searched term. If yes, it returns the element(s) in a new array.
  // secondly the new array is mapped into a div, containing each individual element, which will then be rendered into our page.
  const wordsListLayout = (list: TCountries) => {
    //Object.values converts the countries object into an array, so the filter and map methods can work
    return Object.values(list)
      .filter((listElement) => {
        if (searchedTerm === "") {
          return listElement;
        } else if (
          listElement.name.toLowerCase().includes(searchedTerm.toLowerCase())
        ) {
          return listElement;
        }
      })
      .map((element, key) => {
        const countryCode = getCountryCode(element.name);
        return (
          <div className="country" key={key}>
            <p>{element.name}</p>
            <p>{countryCode ? getEmojiFlag(countryCode) : "No Flag"}</p>
          </div>
        );
      });
  };

  return (
    <>
      <input
        type="text"
        placeholder="search..."
        onChange={(event) => {
          setSearchedTerm(event.target.value);
          // console.log(event.target.value);
        }}
      />
      <div>{wordsListLayout(countries)}</div>
    </>
  );
}

export default App;
