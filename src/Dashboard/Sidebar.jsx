import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import {toast} from 'sonner'
const Sidebar = ({ onLinkClick }) => {
  const sidebarData = [
    {
      name: "Projects",
      link: "/dashboard/",
    },
    {
      name: "Blogs",
      link: "/dashboard/blogs",
    },
    {
      name: "Add Projects",
      link: "/dashboard/addproject",
    },
    {
      name: "Add Blogs",
      link: "/dashboard/addblog",
    },
    {
      name: "Go Back",
      link: "/",
    },
  ];

  const handleLogout = async()=>{
    try {
      await signOut(auth);
      onLinkClick();
      toast.info('Admin Logged Out....')
    } catch (error) {
      toast.warning('Something went wrong...')
    }
  }
  return (
    <div className="w-64 h-full p-4">
      <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
      <ul className="space-y-4">
        <li>
          {sidebarData.map((item) => {
            return (
              <Link
                to={item.link} // ✅ Use absolute path
                onClick={onLinkClick}
                className="block p-2 hover:bg-blue-700 rounded"
              >
                {item.name}
              </Link>
            );
          })}
        </li>
      </ul>
        <button onClick={handleLogout} className="block p-2 hover:bg-blue-700 rounded">Logout</button>
    </div>
  );
};

export default Sidebar;
