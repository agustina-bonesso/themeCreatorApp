import "./App.css";
//import ColorCard from "./components/ColorCard.js";
import { themes } from "./db.js";
import Theme from "./components/Theme.js";

function App() {
  return (
    <>
      <header className="header">
        <h1>Theme Creator</h1>
      </header>
      <main className="main-container">
        <ul>
          {themes.map((theme) => {
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
