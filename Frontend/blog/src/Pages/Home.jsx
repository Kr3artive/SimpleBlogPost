import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:7000/post/posts")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
        setError("UNABLE TO FETCH POST, PLEASE CHECK YOUR NETWORK CONNECTION ");
      });
  }, []);

  return (
    <div className="grid justify-center p-4">
      <div>
        <h1 className="text-3xl text-center font-bold mb-4">ALL POSTS</h1>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid gap-6 w-full max-w-2xl">
        {data.length > 0 ? (
          data.map((post) => (
            <div
              key={post.id}
              className="border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold text-black mb-2 capitalize">
                {post.title}
              </h2>
              <p className="text-black leading-relaxed">{post.body}</p>
            </div>
          ))
        ) : (
          <p className="text-black text-center">No posts available</p>
        )}
      </div>
    </div>
  );
};

export default Home;
