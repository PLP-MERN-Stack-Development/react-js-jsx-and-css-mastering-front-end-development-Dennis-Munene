import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex justify-between items-center py-4 px-6 shadow-md bg-white dark:bg-gray-800 transition-colors duration-300">
      <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
        Weather Explorer
      </h1>
      <button
        onClick={toggleTheme}
        className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      >
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}
