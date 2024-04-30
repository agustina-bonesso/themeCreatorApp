import { useState } from "react";
import ColorCard from "./ColorCard";
import "./ThemeDetailView.css";
import ThemeForm from "./ThemeForm.js";
import TestPage from "./TestPage.js";
import Button from "./Button.js";

export default function ThemeDetailView({ theme, onDeleteTheme, onSaveTheme }) {
  const [displayState, setDisplayState] = useState("Detail");
  function handleEditView() {
    setDisplayState("Edit");
  }
  function handleTestTheme() {
    setDisplayState("Test");
  }
  function handleCloseTestView() {
    setDisplayState("Detail");
  }
  return (
    <>
      {displayState === "Detail" && (
        <>
          <ul className="color-list">
            {theme.colors.map((color) => (
              <li key={color.role}>
                <ColorCard color={color} />
              </li>
            ))}
          </ul>
          <Button
            onClick={() => {
              onDeleteTheme(theme.id);
            }}
            type="button"
          >
            Delete Theme
          </Button>
          <Button onClick={handleEditView} type="button">
            Edit Theme
          </Button>
          <Button onClick={handleTestTheme} type="button">
            Try me!
          </Button>
        </>
      )}
      {displayState === "Edit" && (
        <ThemeForm
          isEditMode="true"
          initialData={theme}
          onSaveTheme={(theme) => {
            onSaveTheme(theme);
            setDisplayState("Detail");
          }}
        />
      )}
      {displayState === "Test" && (
        <TestPage theme={theme} onCloseTestView={handleCloseTestView} />
      )}
    </>
  );
}
