export const ControlsPanel = () => {
  return (
    <div class = "panel controls">
    <div class = "input-wrapper">
        <input
          class       = "input-area"
          type        = "text"
          name        = "input"
          placeholder = "inserisci il testo da tradurre"
        />
        <button class = "btn erase-input-button">X</button>
      </div>
      <div class = "lang-btn-wrapper">
        {/* <button class="btn drop-down-button">Choose Languages</button> */}
      </div>
      {/* <button class="btn show-favorite-btn absolute">➥</button> */}
    </div>)
};
