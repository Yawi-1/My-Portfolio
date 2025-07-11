import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import HeroImg from "../assets/HeroImg.webp";
import { useEffect, useState } from "react";
import Buttons from "./Buttons";

function Home() {
  const skills = ["Web Developer","App Developer", "Web Designer", "Coder"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentSkill = skills[index];

    const typeSpeed = isDeleting ? 100 : 200; // Faster when deleting

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText((prev) => prev.slice(0, -1));
      } else {
        setText((prev) => currentSkill.slice(0, prev.length + 1));
      }

      // When typing is done
      if (!isDeleting && text === currentSkill) {
        setTimeout(() => setIsDeleting(true), 1000); // Wait 1 sec, then start deleting
      }
      // When deleting is done
      else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % skills.length); // Go to next word
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, skills]);
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 px-4 sm:px-8 md:px-12 lg:px-24"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Column - Text Content */}
        <div className="flex-1 space-y-6 text-center lg:text-left animate-fade-in-up">
          <div className="space-y-2 ">
            <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
              Hello, I'm
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Mudasir Javid Malik
            </h1>
            <p className="text-xl sm:text-2xl h-12 text-gray-600 dark:text-gray-300 font-medium">
              {text}
              <span className="animate-blink">|</span>
            </p>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto lg:mx-0">
              Crafting digital experiences with modern web technologies.
              Specializing in Full stack web development .
            </p>
          </div>
             <Buttons />
          {/* Social Links */}
          <div className="flex justify-center lg:justify-start space-x-6">
            {[
              {
                icon: <FaGithub />,
                color: "hover:text-gray-800 dark:hover:text-white",
                link: "https://github.com/Yawi-1",
                label: "GitHub",
              },
              {
                icon: <FaLinkedin />,
                color: "hover:text-blue-600",
                link: "https://www.linkedin.com/in/mudasir143/",
                label: "LinkedIn",
              },
              {
                icon: <FaInstagram />,
                color: "hover:text-pink-500",
                link: "http://instagram.com/hey__yawii__/",
                label: "Instagram",
              },
              {
                icon: <FaEnvelope />,
                color: "hover:text-red-500",
                link: "mailto:yawimalik786@gmail.com",
                label: "Email",
              },
              {
                icon: <FaPhone className="rotate-" />,
                color: "hover:text-green-500",
                link: "tel:+916006704662",
                label: "Phone",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className={`relative group text-gray-600 dark:text-gray-300 text-2xl transition-all duration-300 transform hover:scale-125 ${item.color}`}
              >
                {item.icon}
                <span className="absolute bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        
        </div>

        {/* Right Column - Image and About Me */}
        <div className="flex-1 flex flex-col items-center lg:items-end space-y-8 animate-fade-in-down">
          {/* Profile Image */}
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
            <svg className="absolute -top-8 -left-8 w-72 h-72 text-blue-200 opacity-40" viewBox="0 0 200 200" fill="currentColor">
              <path d="M40.5,-66.2C52.2,-59.2,61.2,-48.2,67.2,-35.8C73.2,-23.4,76.2,-9.7,74.2,3.7C72.2,17.1,65.2,30.2,56.2,41.2C47.2,52.2,36.2,61.1,23.2,66.2C10.2,71.3,-4.8,72.6,-19.2,69.2C-33.6,65.8,-47.4,57.7,-56.2,46.1C-65,34.5,-68.8,19.2,-70.2,3.1C-71.6,-13,-70.6,-29.9,-62.8,-41.7C-55,-53.5,-40.5,-60.2,-25.1,-66.2C-9.7,-72.2,6.6,-77.5,21.2,-75.2C35.8,-72.9,49.8,-63.2,40.5,-66.2Z" transform="translate(100 100)" />
            </svg>
            <img
              src={HeroImg}
              alt="Profile"
              className="relative z-10 w-full h-full object-cover rounded-full shadow-xl transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <p className="mt-4 italic text-gray-500 dark:text-gray-400">
            Turning coffee into clean code since 2022 ☕→💻
          </p>
          {/* About Me Card */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg max-w-lg transform transition-all duration-300 hover:shadow-xl">
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              About Me
            </h3>
            <ul className="text-gray-600 dark:text-gray-300 space-y-2">
              <li>🚀 Full Stack Web Developer</li>
              <li>🎨 React Enthusiast | Crafting sleek & user-friendly UIs</li>
              <li>🎯 Problem Solver | Turning ideas into working products</li>
              <li>🌱 Continuous Learner | Always exploring new tech</li>
              <li>🤝 Team Player | Love collaborating & mentoring</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
