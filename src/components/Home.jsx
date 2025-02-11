import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import HeroImg from "../assets/HeroImg.webp";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 px-4 sm:px-8 md:px-12 lg:px-24"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Column - Text Content */}
        <div className="flex-1 space-y-6 text-center lg:text-left animate-fade-in-up">
          <div className="space-y-4">
            <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
              Hello, I'm
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Mudasir Javid Malik
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-medium">
              Full Stack Developer
            </p>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto lg:mx-0">
              Crafting digital experiences with modern web technologies.
              Specializing in Full stack web development .
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start space-x-6">
            {[
              {
                icon: <FaGithub />,
                color: "hover:text-gray-800 dark:hover:text-white",
                link: "https://github.com/Yawi-1",
              },
              {
                icon: <FaLinkedin />,
                color: "hover:text-blue-600",
                link: "https://www.linkedin.com/in/mudasir143/",
              },
              {
                icon: <FaInstagram />,
                color: "hover:text-pink-500",
                link: "http://instagram.com/hey__yawii__/",
              },
              {
                icon: <FaEnvelope />,
                color: "hover:text-red-500",
                link: "mailto:yawimalik786@gmail.com",
              },
              {
                icon: <FaPhone className="rotate-" />,
                color: "hover:text-green-500",
                link: "tel:+916006704662",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-600 dark:text-gray-300 text-2xl transition-all duration-300 transform hover:scale-125 ${item.color}`}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Column - Image and About Me */}
        <div className="flex-1 flex flex-col items-center lg:items-end space-y-8 animate-fade-in-down">
          {/* Profile Image */}
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
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
