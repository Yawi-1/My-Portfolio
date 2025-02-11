import React, { useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([
    { id: 1, title: "Why React?", content: "React makes UI development easy" },
    { id: 2, title: "Firebase Authentication", content: "Secure login in React apps" }
  ]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Blogs</h1>
      <ul className="space-y-3">
        {blogs.map((blog) => (
          <li key={blog.id} className="p-3 bg-white shadow rounded">
            <h2 className="text-lg font-semibold">{blog.title}</h2>
            <p>{blog.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
