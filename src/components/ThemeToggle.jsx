import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../context/ThemeContext';

function ThemeToggle() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className="w-14 h-8 flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300 focus:outline-none relative"
      aria-label="Toggle dark mode"
      tabIndex={0}
    >
      <span className={`absolute left-1 top-1 transition-transform duration-300 ${darkMode ? 'translate-x-6' : 'translate-x-0'}`}>
        {darkMode ? (
          <SunIcon className="h-6 w-6 text-yellow-400" />
        ) : (
          <MoonIcon className="h-6 w-6 text-gray-600" />
        )}
      </span>
      {/* Track for visual effect */}
      <span className="block w-full h-full" />
    </button>
  );
}

export default ThemeToggle;