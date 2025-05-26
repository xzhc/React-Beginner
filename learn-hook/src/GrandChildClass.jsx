import React from "react";
import { ThemeContext } from "./ThemeContext";

export class GrandChildClass extends React.Component {
  static contextType = ThemeContext;
  render() {
    const { isDarkMode, toggleTheme } = this.context || {};
    if (!this.context) {
      return <p>Error: ThemeContext is not provided</p>;
    }
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
}
