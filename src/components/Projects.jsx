import Ecommerce from '../../public/Ecommerce.webp'
import EduTutor from '../../public/EduTutor.webp'
import University from '../../public/university.webp'
import projectManager from '../../public/projectManager.webp'
import Pos from '../../public/POS.webp'
function Projects() {
  const projects = [
    {
      id: 6,
      title: "Point OF Sale System",
      description: "A complete  ecommerce website  for selling books with authentication, payment integration and admin dashboard for management.",
      image: Pos, 
      tech:['MongoDB','Express','React','Node','Tailwind','Razorpay'],
      github: "https://github.com/Yawi-1/Point-Of-Sale-System",
      live: "https://pos11.netlify.app/",
    },
    {
      id: 3,
      title: "AR Bookstore",
      description: "A complete  ecommerce website  for selling books with authentication, payment integration and admin dashboard for management.",
      image: Ecommerce, 
      tech:['Firebase','React','Tailwind','Razorpay'],
      github: "https://github.com/Yawi-1/ScRollArRu_Project",
      live: "https://scrollar4u.netlify.app/",
    },
    {
      id: 1,
      title: "Edu-Tutor",
      description: "A  Responsive and Impressive  Landing Page for an Online Education Platform, Created Using React,Tailwind and Framer-motion. ",
      image: EduTutor, 
      tech: ['React', 'Tailwind', 'Framer-Motion'],
      github: "https://github.com/Yawi-1/Edu-Tutor",
      live: "https://edututor.netlify.app/",
    },
    {
      id: 2,
      title: "University Website",
      description: "A complete responsive frontend of a university website which contain many pages and created using HTML,CSS & JS ",
      image: University,
      tech: ['HTML', 'CSS', 'Javascript'],
      github: "https://github.com/Yawi-1/collegeWebsite.github.io",
      live: "https://yawi-1.github.io/collegeWebsite.github.io/",
    },
    {
      id: 4,
      title: "Project Manager",
      description: "An innovative website designed for teachers to manage the projects of students, it is responsive and also contain admin panel for admin..",
      image: projectManager,
      tech: ['React', 'Express', 'Node','MongoDb', 'Tailwind','Rest API'],
      github: "https://github.com/Yawi-1/projectManagement",
      live: "https://projectmanager11.netlify.app",
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-16 dark:text-white animate-fade-in">
        Projects
        <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto rounded-full" />
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div 
            key={project.title}
            className="group relative bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-out overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out" 
                loading='lazy'
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm font-medium transition-all hover:bg-blue-200 dark:hover:bg-blue-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 items-center">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Code
                </a>
                <a 
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
}

export default Projects;