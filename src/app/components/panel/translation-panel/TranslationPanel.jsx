export const TranslationPanel = () => {
  return (
    <div className="panel translation">
      <div className="translation-result">
        <p className="translated-text text-color">Waiting. . .</p>
      </div>
      <span className="lang-flag absolute"></span>
      <button className="btn favorite-btn absolute">★</button>
      <button className="btn reset-translation-button absolute">X</button>
    </div>
  );
};
