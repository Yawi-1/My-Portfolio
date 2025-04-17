import { FaFolderOpen, FaFileAlt } from "react-icons/fa"; // Import Icons

export default function Buttons() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
      {/* View Projects Button */}
      <a
        href="#projects"
        className="flex items-center gap-2 md:px-6 md:py-3 px-4 py-2 text-sm md:text-lg font-semibold rounded-lg transition-all duration-300
        bg-indigo-600 text-white shadow-md hover:scale-105 hover:-translate-y-1 hover:shadow-lg
        dark:bg-indigo-400 dark:text-black"
      >
        <FaFolderOpen className="text-xl" />
        View Projects
      </a>

      {/* Resume Button */}
      <a
        href="https://drive.google.com/file/d/1lAETwhK28iywyIfp__sLvZIfsYQM96Nw/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 md:px-6 md:py-3 px-4 py-2 text-sm md:text-lg font-semibold rounded-lg transition-all duration-300
        bg-gray-200 text-gray-800 shadow-md hover:scale-105 hover:-translate-y-1 hover:shadow-lg
        dark:bg-gray-800 dark:text-white"
      >
        <FaFileAlt className="text-xl" />
        Resume
      </a>
    </div>
  );
}
