import { Link } from "react-router-dom";
import About from "./about";

const Title = () => (
  <Link to="/">
    <img
      alt="logo"
      id="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCz1kYTQH7CAVYluA9vI4oOQbbv3d-VyjRGGpYASg&s"
    />
  </Link>
);

const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
