import { lazy, Suspense, useEffect } from "react";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from "sonner";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./Dashboard/ProtectedRoute";

// Lazy load heavy components
const Home = lazy(() => import("./components/Home"));
const Skills = lazy(() => import("./components/Skills"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Login = lazy(() => import("./Dashboard/Login"));
const Dashboard = lazy(() => import("./Dashboard/Dashboard"));
import CircleFollower from "./components/CircleFollower";

// Loading placeholder (Fallback UI)
const Loader = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
  </div>
);

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <ThemeProvider>
      <Toaster richColors position="top-right" />
      <CircleFollower />
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-white dark:bg-gray-900 transition-colors">
              <Navbar />
              <Suspense fallback={<Loader />}>
                <Home />
                <Experience />
                <Projects />
                <Skills />
                <Contact />
              </Suspense>
            </div>
          }
        ></Route>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
