import React, { useState } from "react";
import lupa from "../video/lupa.ico";
import "./SearchBar.css";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  return (
    <form
      className="searchBar"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
        setCity("");
      }}
    >
      <input
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">
        <img src={lupa} />
      </button>
    </form>
  );
}
