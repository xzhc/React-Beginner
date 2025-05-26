export function GrandChild({ isDarkMode, toggleTheme }) {
  return (
    <button
      style={{
        background: isDarkMode ? "white" : "#333",
        color: isDarkMode ? "#333" : "white",
        border: "none",
        padding: ".5em",
        borderRadius: ".25em",
        cursor: "pointer",
      }}
      onClick={toggleTheme}
    >
      Toggle Theme
    </button>
  );
}
