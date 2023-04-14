import { Link } from "react-router-dom";
import About from "./about";

const Title = () => (
  <Link to="/">
    <img  className="h-11 rounded-lg ml-2"
      alt="logo"
      id="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCz1kYTQH7CAVYluA9vI4oOQbbv3d-VyjRGGpYASg&s"
    />
  </Link>
);

const HeaderComponent = () => {
  return (
    <div className="flex h-14 justify-between bg-blue-300 items-center shadow-xl ">
      <Title />
      <div>
        <ul className="flex pr-4">
          <li className="p-3">
            <Link to="/">Home</Link>
          </li >
          <li className="p-3" >
            <Link to="/about">About</Link>
          </li>
          <li className="p-3">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-3">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="p-3">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
