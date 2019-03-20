import React from "react";
import Carosel from "./Carosel";
import TimeUntil from "./TimeUntil";

export default function Featured() {
  return (
    <div>
      <div className={{ position: "relative" }}>
        <Carosel />
        <div className="artist_name">
          <div className="wrapper">Ariana Grande</div>
        </div>
      </div>
      <TimeUntil />
    </div>
  );
}
