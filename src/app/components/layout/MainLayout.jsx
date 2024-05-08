import { HeaderPanel } from "../panel/header-panel/HeaderPanel";
import { TranslationPanel } from "../panel/translation-panel/TranslationPanel";
import { ControlsPanel } from "../panel/controls-panel/ControlsPanel";

export const MainLayout = () => {
  return (
    <div className="app-container">
      <HeaderPanel />
      <main className="main-container">
      <TranslationPanel />
      <ControlsPanel />
      </main>
    </div>
  );
};
