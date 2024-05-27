import { useRef, useEffect } from "react";

  export const TranslationPanel = ({
    translationResult ,translationLanguageFlag,
    setTranslationResult, setTranslationLanguageFlag,
    isLoading,
    lastTranslationRecord}) => {
    const translatedTextRef = useRef(null)
    const addFavourite = useRef(null);
    const eraseTranslation = useRef(null);

    useEffect(() => {
        if (translationResult) {
          translatedTextRef.current.style.color = "black";
        } else {
          translatedTextRef.current.style.color = "#E4DADA";
        }
    }, [translationResult]);

    const clearTranslationPanel = () => {
      setTranslationLanguageFlag("")
      setTranslationResult("");
    }

    const handleFavourite = () => {
      lastTranslationRecord.langFrom;
      lastTranslationRecord.langTo;
      console.log(
        lastTranslationRecord.langFrom,
        lastTranslationRecord.langTo
      )
    }

  return (
    <div className="panel translation">
      <div className="translation-result">
      {isLoading ? 
      <img className="loading-screen" src="/assets/loading-screen-pikachu-running.gif"/>
      :
      <p className="translated-text" ref={translatedTextRef}>{translationResult || "Waiting . . ."}</p>}
      </div>
      <span className={`lang-flag absolute ${translationLanguageFlag ? "visible" : "hidden"}`}>{translationLanguageFlag ? translationLanguageFlag : null}</span>
      <button className={`btn favorite-btn absolute ${translationLanguageFlag /*DA CAMBIARE LOCALHOST CHECK*/ ? "visible" : "hidden"}`} ref={addFavourite} onClick={handleFavourite}>★</button>
      <button className={`btn reset-translation-button absolute ${translationLanguageFlag ? "visible" : "hidden"}`} ref={eraseTranslation} onClick={clearTranslationPanel}>X</button>
    </div>
  );
};
