import React, { useEffect, useState } from 'react';

export const ControlsPanel = () => {
  const [data, setData] = useState();

useEffect(() => {
  fetch('/lang.json')
    .then(response => response.json())
    .then(data => setData(data));
    console.log(data)
}, []);


  return (
    <div className="panel controls">
      <div className="input-wrapper">
        <input
          className="input-area"
          type="text"
          name="input"
          placeholder="inserisci il testo da tradurre"
        />
        <button className="btn erase-input-button">X</button>
      </div>
      <div className="lang-btn-wrapper">
        {/* <button className="btn drop-down-button">Choose Languages</button> */}
      </div>
      {/* <button className="btn show-favorite-btn absolute">➥</button> */}
    </div>
  );
};
