import { useState } from "react";
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare,
  FaGit, FaServer, FaGlobe
} from "react-icons/fa";
import {
  SiMongodb, SiTailwindcss, SiBootstrap,
  SiFirebase, SiExpress
} from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { IoIosColorPalette } from "react-icons/io";

function Skills() {
  const skills = [
    { name: "React", icon: FaReact, level: 90, color: "text-blue-500", category: "Frontend" },
    { name: "HTML", icon: FaHtml5, level: 95, color: "text-orange-500", category: "Frontend" },
    { name: "CSS", icon: FaCss3Alt, level: 90, color: "text-blue-600", category: "Frontend" },
    { name: "JavaScript", icon: FaJsSquare, level: 90, color: "text-yellow-500", category: "Frontend" },
    { name: "Tailwind CSS", icon: SiTailwindcss, level: 85, color: "text-cyan-500", category: "Frontend" },
    { name: "Bootstrap", icon: SiBootstrap, level: 85, color: "text-purple-500", category: "Frontend" },

    { name: "Node.js", icon: FaNodeJs, level: 85, color: "text-green-500", category: "Backend" },
    { name: "Express.js", icon: SiExpress, level: 85, color: "text-gray-500", category: "Backend" },

    { name: "MongoDB", icon: SiMongodb, level: 80, color: "text-green-700", category: "Database" },
    { name: "Firebase", icon: SiFirebase, level: 80, color: "text-yellow-400", category: "Database" },

    { name: "Git", icon: FaGit, level: 85, color: "text-red-500", category: "Other" },
    { name: "UI/UX Design", icon: MdDesignServices, level: 75, color: "text-indigo-500", category: "Other" },
    { name: "Color Theory", icon: IoIosColorPalette, level: 70, color: "text-pink-500", category: "Other" },
    { name: "Server Deployment", icon: FaServer, level: 80, color: "text-gray-700", category: "Other" },
    { name: "Web Hosting", icon: FaGlobe, level: 85, color: "text-blue-400", category: "Other" },
  ];

  const categories = ["All", "Frontend", "Backend", "Database", "Other"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSkills = selectedCategory === "All"
    ? skills
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white animate-fade-in">Skills</h2>

        {/* Dropdown Filter */}
      <div className="mb-6 flex flex-col md:flex-row items-center justify-center gap-4">
  <p className="text-lg font-semibold text-gray-800 dark:text-white">Filter:</p>
  <div className="relative w-64">
    <select
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
      className="w-full px-4 py-2 text-base font-medium rounded-xl border border-gray-300 dark:border-gray-700 shadow-md bg-white dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out appearance-none"
    >
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500 dark:text-gray-400">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
</div>



        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center justify-center animate-scale-in hover:shadow-lg transition-all"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <skill.icon className={`w-12 h-12 mb-4 ${skill.color}`} />
              <h3 className="text-xl font-semibold text-center mb-4 dark:text-white">{skill.name}</h3>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div
                  className="h-2.5 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%`, backgroundColor: "currentColor" }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
