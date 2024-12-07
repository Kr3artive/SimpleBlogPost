import { useForm } from "react-hook-form";
import axios from "axios";

const CreatePost = () => {
  const { register, handleSubmit } = useForm();

  const createPost = async (data) => {
    const formData = {
      title: data.title,
      body: data.body,
      userId: data.userId
    }
    try {
      const response = await axios.post("http://localhost:7000/user/addUser", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response.data);
      
      alert("POST CREATED SUCCESFULLY");
    } catch (error) {
      console.log(error);
      alert("FAILED TO CREATE POST");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(createPost)}
      className="max-w-lg mx-auto p-6 bg-white rounded shadow space-y-4"
    >
      <h1 className="text-2xl font-bold text-center">Create a New Post</h1>

      <input
        {...register("title", { required: true })}
        placeholder="Title"
        className="w-full px-4 py-2 border rounded"
      />

      <textarea
        {...register("body", { required: true })}
        placeholder="Body"
        className="w-full px-4 py-2 border rounded"
      ></textarea>

      <input
        type="file"
        {...register("image", { required: true })}
        accept="image/*"
        className="block w-full"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default CreatePost;
