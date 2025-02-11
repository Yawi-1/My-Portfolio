import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGit, FaServer, FaGlobe } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiBootstrap, SiFirebase, SiExpress } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { IoIosColorPalette } from "react-icons/io";

function Skills() {
  const skills = [
    { name: "React", icon: FaReact, level: 90, color: "text-blue-500" },
    { name: "Node.js", icon: FaNodeJs, level: 85, color: "text-green-500" },
    { name: "MongoDB", icon: SiMongodb, level: 80, color: "text-green-700" },
    { name: "Git", icon: FaGit, level: 85, color: "text-red-500" },
    { name: "HTML", icon: FaHtml5, level: 95, color: "text-orange-500" },
    { name: "CSS", icon: FaCss3Alt, level: 90, color: "text-blue-600" },
    { name: "JavaScript", icon: FaJsSquare, level: 90, color: "text-yellow-500" },
    { name: "Tailwind CSS", icon: SiTailwindcss, level: 85, color: "text-cyan-500" },
    { name: "Bootstrap", icon: SiBootstrap, level: 85, color: "text-purple-500" },
    { name: "Firebase", icon: SiFirebase, level: 80, color: "text-yellow-400" },
    { name: "Express.js", icon: SiExpress, level: 85, color: "text-gray-500" },
    { name: "UI/UX Design", icon: MdDesignServices, level: 75, color: "text-indigo-500" },
    { name: "Color Theory", icon: IoIosColorPalette, level: 70, color: "text-pink-500" },
    { name: "Server Deployment", icon: FaServer, level: 80, color: "text-gray-700" },
    { name: "Web Hosting", icon: FaGlobe, level: 85, color: "text-blue-400" },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 dark:text-white animate-fade-in">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
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
