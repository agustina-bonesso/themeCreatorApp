import ColorCard from "./ColorCard";
import "./ThemeDetailView.css";

export default function ThemeDetailView({ themeColors, onDeleteTheme }) {
  return (
    <>
      <ul className="color-list">
        {themeColors.map((color) => (
          <li key={color.role}>
            <ColorCard color={color} />
          </li>
        ))}
      </ul>
      <button className="delete__button" onClick={onDeleteTheme} type="button">
        Delete Theme
      </button>
    </>
  );
}
