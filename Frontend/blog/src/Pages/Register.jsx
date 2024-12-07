import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../contexts/AuthContexts";

const Register = () => {
  const { handleSubmit, register } = useForm();
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  useEffect(()=>{
    console.log(user);
    
    if (user) {
      navigate("/createpost")
    }
  },[user, navigate])


  const RegisterUser = async (data) => {
    const addUser = {
      username: data.username,
      email: data.email,
      password: data.password,
    };
    try {
      const response = await axios.post(
        "http://localhost:7000/user/addUser",
        addUser,
        // {headers:{ Authorization: token }}
      );
      console.log("USER SUCCESSFULLY ADDED:", response.data);
      alert("USER ADDED, CLICK OK");
      setUser(response.data.user)
      navigate("/createpost")
    } catch (error) {
      console.error("ERROR ADDING USER:", error);
      alert("PlEASE CHECK YOUR INTERNET CONNECTION AND TRY AGAIN");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full mx-4 sm:mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Register
        </h2>
        <form onSubmit={handleSubmit(RegisterUser)} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-gray-700 font-medium mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              {...register("username", { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-2 focus:border-blue-500"
              placeholder="Enter your username"
            />
          </div>
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
              {...register("email", { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-2 focus:border-blue-500"
              placeholder="Enter your email"
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
              {...register("password", { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-2 focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 text-white bg-black hover:bg-green-600 rounded-md transition-colors duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
