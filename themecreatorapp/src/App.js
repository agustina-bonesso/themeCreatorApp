import "./App.css";
//import ColorCard from "./components/ColorCard.js";
import { themes } from "./db.js";
import Theme from "./components/Theme.js";
import ThemeForm from "./components/ThemeForm.js";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function App() {
  const [themesArray, setThemesArray] = useState(themes);

  function onAddTheme(newTheme) {
    setThemesArray([
      {
        id: uuid(),
        ...newTheme,
      },
      ...themesArray,
    ]);
  }
  function handleDeleteTheme(id) {
    const updatedThemes = themes.filter((theme) => theme.id !== id);

    setThemesArray(updatedThemes);
  }
  return (
    <>
      <header className="header">
        <h1>Theme Creator</h1>
      </header>
      <main className="main-container">
        <ThemeForm onAddTheme={onAddTheme} />
        <ul>
          {themesArray.map((theme) => {
            return (
              <li key={theme.id}>
                <Theme
                  themeName={theme.name}
                  themeColors={theme.colors}
                  onDeleteTheme={() => {
                    handleDeleteTheme(theme.id);
                  }}
                />
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}

export default App;
