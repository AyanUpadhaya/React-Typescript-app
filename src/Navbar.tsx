import { useThemeContext } from "./contexts/ThemeContext";

const Navbar: React.FC = () => {
  const { theme, setTheme } = useThemeContext();

  return (
    <nav className="p-4 flex justify-between items-center border-b border-gray-300 dark:border-gray-700">
      <h1 className="text-xl font-bold">My App</h1>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Switch to {theme === "light" ? "Dark" : "Light"} 
      </button>
    </nav>
  );
};
export default Navbar;
