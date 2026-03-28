import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition"
    >
      {theme === "dark" ? (
        <FiSun className="text-xl text-yellow-400" />
      ) : (
        <FiMoon className="text-xl text-gray-600 dark:text-gray-300" />
      )}
    </button>
  );
}

export default ThemeToggle;