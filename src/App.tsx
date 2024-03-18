import { useState } from "react";
import "./App.css";

function App() {
  const wordsList: string[] = ["hi", "hello", "good", "goodbye"];

  const [searchedTerm, setSearchedTerm] = useState("");

  const wordsListLayout = (list: string[]) => {
    return list
      .filter((listElement) => {
        if (searchedTerm === "") {
          return listElement;
        } else if (
          listElement.toLowerCase().includes(searchedTerm.toLowerCase())
        ) {
          return listElement;
        }
      })
      .map((element, key) => (
        <div className="country" key={key}>
          <p>{element}</p>
        </div>
      ));
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
      <div>{wordsListLayout(wordsList)}</div>
    </>
  );
}

export default App;
