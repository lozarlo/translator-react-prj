import React from "react";

export const LangListOne = ({ generateButtons, buttons, }) => {

  const handleButtonClick = (e) => {
    if (e.target.tagName === "BUTTON") {
      const buttonOne = {
        title: e.target.title,
        flag: e.target.innerText,
        dataLang: e.target.dataset.lang,
      };
      buttons.setButtonOne(buttonOne);
    }
  };

  return (
    <div className="lang-list" onClick={handleButtonClick}>
      {generateButtons()}
    </div>
  );
};


export const LangListTwo = ({ generateButtons, buttons, }) => {

  const handleButtonClick = (e) => {
    if (e.target.tagName === "BUTTON") {
      const buttonTwo = {
        title: e.target.title,
        flag: e.target.innerText,
        dataLang: e.target.dataset.lang,
      };
      buttons.setButtonTwo(buttonTwo);
    }
  };

  return (
    <div className="lang-list" onClick={handleButtonClick}>
      {generateButtons()}
    </div>
  );
};

export const LangSelected = ({ buttons }) => {
  return (
    <div className="lang-selected-container">
      <div className="lang-selected-wrapper">
            <p className="lang-selected">{buttons.buttonOne !== undefined ? buttons.buttonOne.title : null}</p>
            <p className="lang-selected">{buttons.buttonOne !== undefined ? "⬇︎" : null}</p>
            <p className="lang-selected">{buttons.buttonTwo !== undefined ? buttons.buttonTwo.title : null}</p>
      </div>
    </div>
  );
};
