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

  async function getColorsNames(theme) {
    // fetch name for every color in colors array
    const promises = theme.colors.map(async (color) => {
      const cleanHexValue = color.value.replace("#", "");
      const response = await fetch(
        `https://www.thecolorapi.com/id?hex=${cleanHexValue}`
      );
      const data = await response.json();

      return {
        ...color,
        name: data.name.value,
      };
    });

    // await all promises
    const colorsWithName = await Promise.all(promises);
    return colorsWithName;
  }
  async function handleEditTheme(newTheme) {
    const colorsWithNames = await getColorsNames(newTheme);
    const setUpThemes = themes.map((theme) => {
      if (theme.id !== newTheme.id) {
        return theme;
      }
      return { ...newTheme, colors: colorsWithNames };
    });
    setThemes(setUpThemes);
  }

  async function handleAddTheme(newTheme) {
    const colorsWithNames = await getColorsNames(newTheme);
    console.log(colorsWithNames);
    setThemes([
      { ...newTheme, id: uuid(), colors: colorsWithNames },
      ...themes,
    ]);
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
        <ThemeForm onAddTheme={handleAddTheme} />
        <ul>
          {themes.map((theme) => {
            return (
              <li key={theme.id}>
                <Theme
                  theme={theme}
                  onDeleteTheme={handleDeleteTheme}
                  onSaveTheme={handleEditTheme}
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
