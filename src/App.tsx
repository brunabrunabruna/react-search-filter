import { useState } from "react";
import "./App.css";
import ContinentFilter from "./ContinentFilter";
import CountryCard from "./CountryCard";

// Interfaces and types
import type { ICountry, TContinentCode, TCountries } from "countries-list";

// Main data and utils
import { countries } from "countries-list";

function App() {
  // const wordsList: string[] = ["hi", "hello", "good", "goodbye"];
  // console.log(countries);
  // console.log(Object.values(countries));

  //state which contains the value (what is being typed) in the search input
  const [searchedTerm, setSearchedTerm] = useState("");
  const [isExtraInfosVisible, setIsExtraInfosVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<ICountry | null>(null);
  const [selectedContinent, setSelectedContinent] =
    useState<TContinentCode | null>(null);
  //function that handles search through our data. first it filters through the given array of data, and checks if the search bar is empty(returns all data), or if there are elements in the array that contain the searched term. If yes, it returns the element(s) in a new array.
  // secondly the new array is mapped into a div, containing each individual element, which will then be rendered into our page.
  const countriesListLayout = (countriesList: TCountries) => {
    console.log(selectedContinent);
    //Object.values converts the countries object into an array, so the filter and map methods can work

    return (
      Object.values(countriesList)
        //filters countries based on the selected continent. by default all the countries are showns (!selectedContinent condition), since there is no selected continent yet. If a continent button is clicked, and a continent then selected, only the countries that have that continent property will match the condition, and therefore be added to the new array.
        .filter((country) => {
          if (!selectedContinent || selectedContinent === country.continent) {
            return true;
          }
          return false;
        })
        //this filter handles the search country function. If there are no searched terms (default), it returns all the elements(countries). If there is a search term, it checks which countries have the name property that match it, and return only them. Searched term state is updated when the <imput/> has an OnChange event, setting the searched term to the current value of the imput.
        .filter((country) => {
          if (searchedTerm === "") {
            return country;
          } else if (
            country.name.toLowerCase().includes(searchedTerm.toLowerCase())
          ) {
            return country;
          }
        })
        .map((element, key) => {
          //defining the function which is activated when the country card is clicked. if there was a visible popup it hides it, if there was none visible, it sets it to visible, as well as sets the selected country as the currently clicked country.
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
        })
    );
  };

  return (
    <>
      <div
        className="app"
        onClick={() => (selectedCountry ? setSelectedCountry(null) : "")}
      >
        <div className="nav">
          search
          <input
            className="search-box"
            type="text"
            placeholder="search country..."
            onChange={(event) => {
              setSearchedTerm(event.target.value);
            }}
          />
          <ContinentFilter
            selectedCountry={selectedCountry}
            selectedContinent={selectedContinent}
            setSelectedContinent={setSelectedContinent}
          />
        </div>

        <div className="countries">{countriesListLayout(countries)}</div>
      </div>
    </>
  );
}

export default App;
