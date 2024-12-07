import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="grid justify-center shadow-md p-2 md:flex md:justify-between">
      <div className="flex gap-4 justify-center md:justify-start">
        <Link
          className="font-bold border-b-2 border-black hover:border-green-500 transition duration-300"
          to={"/register"}
        >
          REGISTER
        </Link>
        <Link
          className="font-bold border-b-2 border-black hover:border-green-500 transition duration-300"
          to={"/login"}
        >
          LOGIN
        </Link>
      </div>
    </div>
  );
};

export default Header;
