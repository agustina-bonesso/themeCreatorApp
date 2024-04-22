import "./ThemePreview.css";

export default function ThemePreview({ themeColors }) {
  return (
    <section>
      <ul className="color-list__preview">
        {themeColors.map((color) => {
          return (
            <li key={color.role}>
              <div style={{ backgroundColor: color.value }} className="color-box"></div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
