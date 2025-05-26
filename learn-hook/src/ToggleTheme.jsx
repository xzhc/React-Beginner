import { useEffect, useState } from "react";
import { Child } from "./Child";
import { ThemeContext } from "./ThemeContext";
export function ToggleTheme() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleTheme() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "#333" : "white";
    document.body.style.color = isDarkMode ? "white" : "#333";
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <Child />
      <p>It's xzh</p>
    </ThemeContext.Provider>
  );
}
