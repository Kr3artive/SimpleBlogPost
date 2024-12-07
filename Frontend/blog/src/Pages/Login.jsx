import { useAuth } from "../contexts/AuthContexts";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Login = () => {
  const { login, user } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (user) {
      navigate("/createpost");
    }
  }, [user, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("PLEASE ENTER BOTH USERNAME AND PASSWORD");
      alert("PLEASE ENTER BOTH USERNAME AND PASSWORD")
      return;
    }
    setError("");
    try {
      login({ username, password });
      navigate("/createpost");
    } catch (error) {
      console.error("LOGIN FAILED", error);
      setError("LOGIN FAILED, PLEASE TRY AGAIN");
      alert("LOGIN FAILED, PLEASE TRY AGAIN LATER")
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full mx-4 sm:mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Login
        </h2>
        {error && (
          <p className="text-red-600 text-sm text-center mb-4">{error}</p>
        )}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-2 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-2 focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 text-white bg-black hover:bg-green-600 rounded-md transition-colors duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
