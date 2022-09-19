import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  if (props.meaning) {
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              {/* <Phonetic phonetic={definition.phonetic} /> */}
              <div className="definition">{definition.definition}</div>
              <div className="synonym">
                <Synonyms synonyms={definition.synonyms} />
              </div>
              <div className="example">
                <em>{definition.example}</em>
              </div>
            </div>
          );
        })}
        {/* <p>{props.meaning.definitions[0].definition}</p>
      <p>{props.meaning.definitions[0].example}</p> */}
      </div>
    );
  } else {
    return null;
  }
}
