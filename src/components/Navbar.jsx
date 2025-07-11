import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { auth } from "../firebase/firebase"; // Import Firebase auth
import { onAuthStateChanged, signOut } from "firebase/auth";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);
  const navItems = ["home",  "experience", "projects","skills", "contact"];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    setShow(true); // Trigger animation on mount
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed w-full bg-white dark:bg-gray-900 shadow-lg z-50 transition-colors p-4 transform transition-all duration-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <span className="text-xl font-bold dark:text-white">Mudasir.dev</span>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="capitalize text-lg font-semibold cursor-pointer hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                >
                  {item}
                </a>
              ))}
               <Link
                to={`${user ? '/dashboard':'/login'}`}
                className="text-lg font-semibold cursor-pointer hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              >
                Admin
              </Link>
              {user && (
                <button
                  onClick={handleLogout}
                  className="text-lg font-semibold cursor-pointer hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400 transition-colors"
                >
                  Logout
                </button>
              )}
            </div>
            <ThemeToggle />
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          }`}
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setIsMenuOpen(false)}
                className="block capitalize text-center py-2 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {item}
              </a>
            ))}
             <Link
                  to={`${user ? '/dashboard':'/login'}`}
              onClick={() => setIsMenuOpen(false)}
              className="block text-center py-2 text-lg font-semibold hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
            >
              Admin
            </Link>
            {user && (
              <button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="block text-center w-full py-2 text-lg font-semibold text-red-600 dark:text-red-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
