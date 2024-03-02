import React from "react";
import Date from "./Date";
import SearchEngine from "./SearchEngine";
import Weather from "./Weather";

import "./index.css";

export default function App() {
  return (
    <div className="App">
      <SearchEngine />
      <Date />
      <Weather />
    </div>
  );
}
