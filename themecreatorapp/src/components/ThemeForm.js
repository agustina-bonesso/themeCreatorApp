import ColorPicker from "./ColorPicker";
import "./ThemeForm.css";
import Button from "./Button";
const INITIAL_THEME = {
  name: "",
  colors: [
    { role: "primary", value: "#6200ee" },
    { role: "secondary", value: "#03dac6" },
    { role: "surface", value: "#ffffff" },
    { role: "surface-on", value: "#000000" },
  ],
};

export default function ThemeForm({
  onAddTheme,
  isEditMode,
  initialData = INITIAL_THEME,
  onSaveTheme,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const newTheme = {
      id: initialData.id,
      name: data.name,
      colors: [
        { role: "primary", value: data.primary },
        { role: "secondary", value: data.secondary },
        { role: "surface", value: data.surface },
        { role: "surface-on", value: data["surface-on"] },
      ],
    };

    if (isEditMode) {
      onSaveTheme(newTheme);
    } else {
      onAddTheme(newTheme);
    }

    event.target.reset();
    event.target.elements.name.focus();
  }
  return (
    <form className="theme-form" onSubmit={handleSubmit}>
      <h2 className="theme-form__title">
        {isEditMode ? "Edit Mode" : "Add Theme"}
      </h2>
      <div className="form__field">
        <input
          aria-label="theme title"
          className="theme-form__name-input"
          type="text"
          placeholder="Theme Name"
          name="name"
          defaultValue={initialData.name}
          required
        />
        <fieldset className="theme-form__input-color">
          {initialData.colors.map((color) => {
            return (
              <li key={color.role}>
                <ColorPicker color={color} />
              </li>
            );
          })}
        </fieldset>
        <Button type="submit">{isEditMode ? "Update Theme" : "Add Theme"}</Button>
      </div>
    </form>
  );
}
