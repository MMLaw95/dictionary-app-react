import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  function playSound() {
    let audio = new Audio(props.phonetic.audio);
    audio.play();
  }
  return (
    <div className="Phonetic red text-center">
      <a href="/#" onClick={playSound}>
        <i class="fa-solid fa-headphones-simple fa-2xl"></i>
      </a>
      <span className="phonetic-text">{props.phonetic.text}</span>
    </div>
  );
}

//   return (
//     <div className="Phonetic red text-center">
//       <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
//         Listen{" "}
//       </a>
//       {/* <br /> */}
//       {props.phonetic.text}
//     </div>
//   );
// }
