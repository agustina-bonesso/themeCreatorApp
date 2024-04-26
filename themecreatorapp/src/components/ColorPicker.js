import { useState } from "react";
import "./ColorPicker.css";

export default function ColorPicker({ color }) {
  const [value, setValue] = useState(color.value);

  function handleColorChange(event) {
    console.log(event.target.value);
    setValue(event.target.value);
  }
  return (
    <div className="input-fields">
      <input
        className="color-box__input"
        type="color"
        name={color.role}
        aria-label={color.role}
        value={value}
        onChange={handleColorChange}
      />
      <label htmlFor={color.role}>{color.role}</label>
      <input
        aria-label="color-hex-value"
        className="color-hex-value__input"
        type="text"
        name="color-hex-value"
        value={value}
        onChange={handleColorChange}
      />
    </div>
  );
}
