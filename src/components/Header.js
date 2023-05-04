import { Link } from "react-router-dom";
import About from "./about";
import usersContext from "../../utils/UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

const Title = () => (
  <Link to="/">
    <img
      className="h-11 rounded-lg ml-2"
      alt="logo"
      id="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCz1kYTQH7CAVYluA9vI4oOQbbv3d-VyjRGGpYASg&s"
    />
  </Link>
);

const HeaderComponent = () => {

  // useContext to import the centralized data to any component 
  const { users } = useContext(usersContext);
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="flex h-14 justify-between bg-blue-300 items-center shadow-xl ">
      <Title />
      <div>
        <ul className="flex pr-4">
          <li className="p-3">
            <Link to="/">Home</Link>
          </li>
          <li className="p-3">
            <Link to="/about">About</Link>
          </li>
          <li className="p-3">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-3">
            <Link to="/instamart">Instamart</Link>
          </li>

          <li className="p-3">
            {" "}
            <Link to="/cart">Cart  {cartItems.length}</Link>
          </li>
          {/* <li>{users.name}</li> */}
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
