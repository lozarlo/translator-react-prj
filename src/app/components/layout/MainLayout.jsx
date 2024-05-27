import { HeaderPanel } from "../panel/header-panel/HeaderPanel";
import { TranslationPanel } from "../panel/translation-panel/TranslationPanel";
import { ControlsPanel } from "../panel/controls-panel/ControlsPanel";
import { useEffect, useRef, useState } from "react";

export const MainLayout = () => {
  const inputRef = useRef();
  const API_URL = "https://api.mymemory.translated.net/get?";
  const [buttonOne, setButtonOne] = useState();
  const [buttonTwo, setButtonTwo] = useState();
  const [translationResult, setTranslationResult] = useState("");
  const [translationLanguageFlag, setTranslationLanguageFlag] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [lastTranslationRecord, setLastTranslationRecord] = useState()

  console.log("btn 1", buttonOne);
  console.log("btn 2", buttonTwo);

  useEffect(() => {
    if(inputValue){
      buttonOne && buttonTwo && inputValue.trim().length > 1
        ? areDataReady()
        : null;
    }
  }, [buttonOne, buttonTwo, inputValue]);

  const areDataReady = () => {
    const text = inputRef.current.value.trim();
    translateText(text);
  };

  const translateText = async (text) => {
    setIsLoading(true);
    const langOne = buttonOne.dataLang;
    const langTwo = buttonTwo.dataLang;
    const langTwoFlag = buttonTwo.flag;
    //
    const request =
      API_URL + `q=${text}` + "&" + `langpair=${langOne}|${langTwo}`;
    const response = await fetch(request);
    const jsonData = await response.json();
    const result = jsonData.responseData.translatedText;
    //  console.log("JSON request:", jsonData);
    //   console.log("Status response:", jsonData.responseStatus);
    console.log("Traduzione in", langTwo + ":", result);
    setIsLoading(false);
    setTranslationLanguageFlag(langTwoFlag);
    setTranslationResult(result);
    setLastTranslationRecord({
      langFrom: {
        name: buttonOne.title,
        flag: buttonOne.flag,
        wordToTranslate: inputValue.trim(),
      },
      langTo: {
        name: buttonTwo.title,
        flag: buttonTwo.flag,
        wordTranslated: result,
      },
    });
  };

  return (
    <div className="app-container">
      <HeaderPanel />
      <main className="main-container">
        <TranslationPanel
          translationResult={translationResult}
          translationLanguageFlag={translationLanguageFlag}
          setTranslationLanguageFlag={setTranslationLanguageFlag}
          setTranslationResult={setTranslationResult}
          isLoading={isLoading}
          lastTranslationRecord={lastTranslationRecord}
        />
        <ControlsPanel
          buttons={{ buttonOne, setButtonOne, buttonTwo, setButtonTwo }}
          inputRef={inputRef}
          setTranslationLanguageFlag={setTranslationLanguageFlag}
          setInputValue={setInputValue}
        />
      </main>
    </div>
  );
};
