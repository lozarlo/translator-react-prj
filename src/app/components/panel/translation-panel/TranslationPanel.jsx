export const TranslationPanel = () => {
  return (
    <div class = "panel translation">
    <div class = "translation-result">
    <p   class = "translated-text text-color">Waiting. . .</p>
      </div>
      <span   class = "lang-flag absolute"></span>
      <button class = "btn favorite-btn absolute">★</button>
      <button class = "btn reset-translation-button absolute">X</button>
    </div>
  );
};
