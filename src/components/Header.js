const Title = () => (
    <a>
      <img
        alt="logo"
        id="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCz1kYTQH7CAVYluA9vI4oOQbbv3d-VyjRGGpYASg&s"
      />
    </a>
  );


const HeaderComponent = () => {
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };


export default HeaderComponent ;