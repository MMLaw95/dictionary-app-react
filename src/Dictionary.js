import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
  }

  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
  axios.get(apiUrl).then(handleResponse);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section className="form">
        <form onSubmit={search} className="inputForm text-center">
          <input
            type="search"
            onChange={handleKeywordChange}
            autoComplete="off"
            placeholder="Look it Up..."
          />
        </form>
        <div className="hint">
          {/* suggestions: computer, code, camera, cassette */}
        </div>
      </section>
      <Results results={results} />
    </div>
  );
}
