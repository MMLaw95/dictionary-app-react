import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            {/* <Phonetic phonetic={definition.phonetic} /> */}
            <div className="definition">{definition.definition}</div>
            <br />
            {/* <strong>Example: </strong> */}
            <div className="example">
              <em>{definition.example}</em>
            </div>
            <br />
            {/* <strong>Synonyms: </strong> */}
            <div className="synonym">
              <Synonyms synonyms={props.meaning.synonyms} />
            </div>
          </div>
        );
      })}
      {/* <p>{props.meaning.definitions[0].definition}</p>
      <p>{props.meaning.definitions[0].example}</p> */}
    </div>
  );
}
