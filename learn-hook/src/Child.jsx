import { GrandChild } from "./GrandChild";

export function Child({ isDarkMode, toggleTheme }) {
  return <GrandChild isDarkMode={isDarkMode} toggleTheme={toggleTheme} />;
}
