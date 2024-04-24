import { useState } from "react";
import ThemeDetailView from "./ThemeDetailView";
import ThemePreview from "./ThemePreview";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import "./Theme.css";
export default function Theme({ theme, onDeleteTheme, onSaveTheme }) {
  const [showDetails, setShowDetails] = useState("false");

  function handleToggleView() {
    setShowDetails(!showDetails);
  }
  return (
    <section>
      <button
        className="theme__toggle-details-button"
        onClick={handleToggleView}
      >
        <h2 className="theme__title">{theme.name}</h2>
        {showDetails ? (
          <IconChevronUp size="3rem" />
        ) : (
          <IconChevronDown size="3rem" />
        )}
      </button>
      {showDetails ? (
        <ThemePreview themeColors={theme.colors} />
      ) : (
        <ThemeDetailView
          theme={theme}
          onDeleteTheme={onDeleteTheme}
          onSaveTheme={onSaveTheme}
        />
      )}
    </section>
  );
}
