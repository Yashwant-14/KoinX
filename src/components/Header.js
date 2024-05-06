import { Link } from "react-router-dom";
import logo from "../utils/logo.png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AuthModal from "./AuthModal";
const Header = () => {
  return (
    <div className=" h-[12vh] flex shadow-md items-center">
      {" "}
      {/* Added items-center to vertically center the content */}
      <div className="ml-[5%] w-[900%]  mr-[5%] flex  items-center justify-between">
        <div className="h-16 w-32  flex items-center justify-center object-cover">
          {" "}
          {/* Adjusted width and height styles */}
          <Link to={"/"}>
            <img className="" src={logo} alt="Logo" />{" "}
          </Link>
          {/* Added alt attribute for accessibility */}
        </div>
        <ul className=" w-[40%] min-w-[450px] flex justify-between  items-center ">
          {" "}
          <Link to={"/search"}>
            <li className="px-2 font-bold ">
              <SearchOutlinedIcon /> Search
            </li>{" "}
          </Link>
          <li className="px-2 font-bold">Free Tools</li>{" "}
          {/* Added padding for space around text */}
          <Link to={"/compare_page"}>
            <li className="px-2 font-bold">Compare</li>{" "}
            {/* Added padding for space around text */}
          </Link>
          <li>
            <AuthModal />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
