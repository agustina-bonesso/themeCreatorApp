import "./App.css";
//import ColorCard from "./components/ColorCard.js";
import { themes } from "./db.js";
import Theme from "./components/Theme.js";
import ThemeForm from "./components/ThemeForm.js";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function App() {
  const [themesArray, setNewThemes] = useState(themes);

  function onAddTheme(data) {
    setNewThemes([
      {
        id: uuid(),
        name: data.name,
        colors: [
          {
            role: "primary",
            value: data["primary-color"],
          },
          { role: "secondary", value: data["secondary-color"] },
          {
            role: "surface",
            value: data["surface"],
          },
          {
            role: "surface-on",
            value: data["surface-on"],
          },
        ],
      },
      ...themesArray,
    ]);
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
                <Theme themeName={theme.name} themeColors={theme.colors} />
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}

export default App;
