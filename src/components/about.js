import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <>
      <h1>this is about</h1>
      <Link to="profile">
        <button>Click</button>
      </Link>
      
      {<Outlet />} 
    </>
  );
};

export default About;
