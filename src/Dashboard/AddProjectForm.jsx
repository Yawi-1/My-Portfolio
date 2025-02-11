import React, { useState } from "react";

const AddProjectForm = () => {
  const [project, setProject] = useState({
    title: "",
    description: "",
    image: "",
    tech: "",
    github: "",
    live: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Project Submitted:", project);
  };

  return (
    <div className="min-h-screen bg-blue-50 p-4 sm:p-6">
      <div className="mx-auto max-w-2xl bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
            Add New Project
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Title */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-blue-900">
                Project Title
              </label>
              <input
                type="text"
                name="title"
                value={project.title}
                onChange={handleChange}
                placeholder="Enter project title"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                required
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-blue-900">
                Description
              </label>
              <textarea
                name="description"
                value={project.description}
                onChange={handleChange}
                placeholder="Enter project description"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                rows="3"
                required
              ></textarea>
            </div>

            {/* Image URL */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-blue-900">
                Image URL
              </label>
              <input
                type="text"
                name="image"
                value={project.image}
                onChange={handleChange}
                placeholder="Enter image URL"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>

            {/* Technologies */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-blue-900">
                Technologies
              </label>
              <input
                type="text"
                name="tech"
                value={project.tech}
                onChange={handleChange}
                placeholder="React, Node.js, Tailwind"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                required
              />
              <p className="text-xs text-gray-500 mt-1">Comma separated list</p>
            </div>

            {/* GitHub Link */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-blue-900">
                GitHub URL
              </label>
              <input
                type="url"
                name="github"
                value={project.github}
                onChange={handleChange}
                placeholder="https://github.com/your-project"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                required
              />
            </div>

            {/* Live Link */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-blue-900">
                Live Demo URL
              </label>
              <input
                type="url"
                name="live"
                value={project.live}
                onChange={handleChange}
                placeholder="https://your-project.demo"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-lg transition-colors duration-200"
            >
              Add Project
            </button>
          </form>

          {/* Preview */}
          {project.title && (
            <div className="mt-8 p-5 bg-blue-50 rounded-lg border border-blue-100">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">
                Preview
              </h3>
              <div className="space-y-2.5 text-sm">
                <p className="flex items-start">
                  <span className="w-20 font-medium text-blue-900">Title:</span>
                  <span className="flex-1">{project.title}</span>
                </p>
                <p className="flex items-start">
                  <span className="w-20 font-medium text-blue-900">Tech:</span>
                  <span className="flex-1">{project.tech}</span>
                </p>
                <p className="flex items-start">
                  <span className="w-20 font-medium text-blue-900">GitHub:</span>
                  <a
                    href={project.github}
                    className="flex-1 text-blue-600 hover:underline break-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.github}
                  </a>
                </p>
                {project.live && (
                  <p className="flex items-start">
                    <span className="w-20 font-medium text-blue-900">Live:</span>
                    <a
                      href={project.live}
                      className="flex-1 text-blue-600 hover:underline break-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.live}
                    </a>
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddProjectForm;