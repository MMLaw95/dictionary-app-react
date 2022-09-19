import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f917000010000019aafb4bf44df4331bb41acdf2af6227d";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(handlePexelsResponse);
  }

  function keywordInput(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section className="form">
        <form onSubmit={search} className="inputForm text-center">
          <input
            type="search"
            onChange={keywordInput}
            autoComplete="off"
            placeholder="Look it Up..."
            className="search-bar"
          />
        </form>
        <div className="hint">
          {/* suggestions: computer, code, camera, cassette */}
        </div>
      </section>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
