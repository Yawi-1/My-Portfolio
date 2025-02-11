import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Projects from "./Projects";
import Blogs from "./Blogs";
import AddProjectForm from "./AddProjectForm";
import AddBlogForm from "./AddBlogForm";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:relative inset-y-0 left-0 w-64 bg-blue-900 text-white z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <Sidebar onLinkClick={() => setIsSidebarOpen(false)} />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="md:hidden p-2 mb-4 rounded-lg bg-blue-900 text-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <Routes>
          <Route path="" element={<Projects />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="addproject" element={<AddProjectForm />} />
          <Route path="addblog" element={<AddBlogForm />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
