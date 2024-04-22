import ColorCard from "./ColorCard";

export default function ThemeDetailView({ themeColors }) {
  return (
    <ul className="color-list">
      {themeColors.map((color) => (
        <li key={color.role}>
          <ColorCard color={color} />
        </li>
      ))}
    </ul>
  );
}
