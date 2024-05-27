import React, { useEffect, useRef, useState } from "react";
import {
  LangListOne,
  LangListTwo,
  LangSelected,
} from "./language-list/LanguageList";

export const ControlsPanel = ({ buttons, inputRef, setInputValue }) => {
  const [data, setData] = useState();
  const [isDropdownActive, SetIsDropdownActive] = useState(false);
  const eraseInput = new useRef();

  //da spostare
  useEffect(() => {
    fetch("/lang.json")
      .then((response) => response.json([]))
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  //da spostare
  const generateButtons = () => {
    return data.lang.map((langButton, index) => (
      <button
        className="btn lang-button"
        key={index}
        title={langButton.name}
        data-lang={langButton.dataLang}
        data-index={index}
      >
        {langButton.flag}
      </button>
    ));
  };

  const showDropdown = () => {
    return (
      <div className="dropdown-container">
        <LangListOne generateButtons={generateButtons} buttons={buttons} />
        <LangSelected buttons={buttons} />
        <LangListTwo generateButtons={generateButtons} buttons={buttons} />
      </div>
    );
  };

  return (
    <div className="panel controls">
      <div className="input-wrapper">
        <input
          className="input-area"
          ref={inputRef}
          type="text"
          name="input"
          placeholder="inserisci il testo da tradurre"
          onInput={(e) => setInputValue(e.target.value)}
        />
        <button
          className="btn erase-input-button"
          ref={eraseInput}
          onClick={() => {inputRef.current.value = ""}}
        >
          X
        </button>
      </div>
      <div className="lang-btn-wrapper">
        <button
          className="btn drop-down-button"
          onClick={() => SetIsDropdownActive(!isDropdownActive)}
        >
          Choose Languages
        </button>
        {isDropdownActive ? data && showDropdown() : null}
      </div>
      <button className="btn show-favorite-btn absolute">➥</button>
    </div>
  );
};
