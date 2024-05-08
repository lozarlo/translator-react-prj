export const ControlsPanel = () => {

async function retriveButton() {
const request = "../../../../../public/lang.JSON";
const response = await fetch(request);
const jsonData = await response.json();
console.log(jsonData)
}

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
