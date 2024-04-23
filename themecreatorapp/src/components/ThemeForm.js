import "./ThemeForm.css";

export default function ThemeForm({ onAddTheme }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddTheme(data);
    console.log(data);
    event.target.reset();
    event.target.elements.name.focus();
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__fields">
        <div className="form__field">
          <label className="form__label" htmlFor="name">
            Name
          </label>
          <input
            className="form__input"
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            defaultValue="My new Theme"
            required
          />
          <div className="form-input__color">
            <input
              type="color"
              aria-label="primary-color"
              name="primary-color"
              className="color-input"
              defaultValue= "#596088"
            />
            <input
              type="color"
              aria-label="secondary-color"
              name="secondary-color"
              className="color-input"
              defaultValue="#D2D6DB"
            />
            <input
              type="color"
              aria-label="surface"
              name="surface"
              className="color-input"
              defaultValue="#F8C7CC"
            />
            <input
              type="color"
              aria-label="surface-on"
              name="surface-on"
              className="color-input"
              defaultValue="#F4F1DE"
            />
          </div>
        </div>
        <button type="submit" className="form__button">
          Add Theme
        </button>
      </div>
    </form>
  );
}
