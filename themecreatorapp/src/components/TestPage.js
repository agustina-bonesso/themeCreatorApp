import "./TestPage.css";
export default function TestPage({ theme, onCloseTestView }) {
  const primaryColor = theme.colors[0].value;
  const secondaryColor = theme.colors[1].value;
  const surfaceColor = theme.colors[2].value;
  const surfaceOnColor = theme.colors[3].value;

  return (
    <>
      <button className="button" onClick={onCloseTestView}>
        Close Test View
      </button>
      <article style={{ backgroundColor: "#e7e4e4" }}>
        <h1 className="test-page__title" style={{ color: primaryColor }}>
          {theme.name}
        </h1>
        <h2>A headline</h2>
        <p className="text">
          An "h2" headline typically refers to a subheading within a document or
          webpage. In HTML (Hypertext Markup Language), headings are structured
          using tags, being the highest level and being the lowest. is commonly
          used for subheadings that provide more specific information under the
          main heading usually "h1". It helps organize content hierarchically,
          making it easier for readers to scan and understand the structure of
          the text.
        </p>
        <div
          className="highlight-box"
          style={{ backgroundColor: secondaryColor }}
        >
          <p className="highlight-box__title">A Highlight Box</p>
          <p className="text">
            React is a JavaScript library for building user interfaces,
            particularly for single-page applications. Developed and maintained
            by Facebook, React provides a declarative, component-based approach
            to building UIs.
          </p>
        </div>
        <div className="button_list">
          <button
            className="test-button"
            style={{ backgroundColor: primaryColor }}
          >
            Button
          </button>
          <button
            className="test-button"
            style={{ backgroundColor: secondaryColor }}
          >
            Button
          </button>
          <button
            className="test-button"
            style={{ backgroundColor: surfaceColor }}
          >
            Button
          </button>
          <button
            className="test-button"
            style={{ backgroundColor: surfaceOnColor }}
          >
            Button
          </button>
        </div>
      </article>
    </>
  );
}
