import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AddBlogForm = () => {
  const [blog, setBlog] = useState({
    title: "",
    description: "",
    image: null,
    imagePreview: "",
    category: "",
    author: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  const handleDescriptionChange = (value) => {
    setBlog({ ...blog, description: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBlog({ ...blog, image: file, imagePreview: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Blog Submitted:", blog);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">
          Add New Blog
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-blue-900 font-semibold">Blog Title</label>
            <input
              type="text"
              name="title"
              value={blog.title}
              onChange={handleChange}
              placeholder="Enter blog title"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Description using Quill */}
          <div>
            <label className="block text-blue-900 font-semibold">Description</label>
            <ReactQuill
              theme="snow"
              value={blog.description}
              onChange={handleDescriptionChange}
              className="bg-white rounded-md border"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-blue-900 font-semibold">Blog Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
            {blog.imagePreview && (
              <img
                src={blog.imagePreview}
                alt="Preview"
                className="mt-2 w-full h-40 object-cover rounded-md border"
              />
            )}
          </div>

          {/* Category */}
          <div>
            <label className="block text-blue-900 font-semibold">Category</label>
            <select
              name="category"
              value={blog.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Category</option>
              <option value="Technology">Technology</option>
              <option value="Health">Health</option>
              <option value="Business">Business</option>
              <option value="Education">Education</option>
            </select>
          </div>

          {/* Author */}
          <div>
            <label className="block text-blue-900 font-semibold">Author Name</label>
            <input
              type="text"
              name="author"
              value={blog.author}
              onChange={handleChange}
              placeholder="Enter author name"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition duration-300"
          >
            Add Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlogForm;
