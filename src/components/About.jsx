function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3">
            <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-full"></div>
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Hi! I'm a full stack developer with a passion for building web applications.
              I have experience working with modern technologies like React, Node.js,
              and various databases.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or enjoying outdoor activities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;