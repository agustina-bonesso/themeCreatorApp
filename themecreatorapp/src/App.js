import "./App.css";
import { themes as initialThemes } from "./db.js";
import Theme from "./components/Theme.js";
import ThemeForm from "./components/ThemeForm.js";
import { v4 as uuid } from "uuid";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [themes, setThemes] = useLocalStorageState("InitialThemes", {
    defaultValue: initialThemes,
  });

  function onAddTheme(newTheme) {
    setThemes([{ ...newTheme, id: uuid() }, ...themes]);
  }
  function handleDeleteTheme(id) {
    const updatedThemes = themes.filter((theme) => theme.id !== id);

    setThemes(updatedThemes);
  }
  return (
    <>
      <header className="header">
        <h1>Theme Creator</h1>
      </header>
      <main className="main-container">
        <ThemeForm onAddTheme={onAddTheme} />
        <ul>
          {themes.map((theme) => {
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
