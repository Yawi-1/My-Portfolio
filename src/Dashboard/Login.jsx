import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import {toast} from 'sonner'
import Spinner from "../components/Spinner";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading,setLoading] = useState(false)

  const signIn = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.warning("Enter a valid email");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }
    setLoading(true)
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
      toast.success('Admin Logged In Successfully....')
    } catch (error) {
      toast.warning("Invalid email or password");
    } finally{
      setLoading(false)
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md p-8 border-4 border-blue-100">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
          <div className="h-12 w-12 bg-blue-400 rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
        </div>
  {loading && <Spinner/>}
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600 mt-4">
          Admin Login
          <div className="mt-2 w-16 h-1 bg-blue-400 mx-auto rounded-full" />
        </h2>

        <form onSubmit={signIn} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2 font-medium">Email</label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-blue-50 border-2 border-blue-100 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                placeholder="admin@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">Password</label>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-blue-50 border-2 border-blue-100 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Login
          </button>
        </form>
        
        <Link to="/" className="mt-4 text-blue-500 text-center block hover:underline">Go back</Link>
      </div>
    </div>
  );
};

export default Login;
