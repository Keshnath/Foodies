import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimer from "./shimer";
import { Img_CDN } from "../constant";

const Menu = () => {
  const { id } = useParams();

  const [resDetails, setresDetails] = useState(null);
  const [menu, setmenu] = useState(null);

  async function getDetails() {
    let data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.4704651&lng=80.2407399&restaurantId=" +
        id
    );
    let json = await data.json();

    setresDetails(json?.data?.cards[0]?.card?.card?.info);
    // setmenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
  }

  useEffect(() => {
    getDetails();
  }, []);

  if (!resDetails) {
    return <Shimer />;
  }

  return (
    <div>
      <h1>Restaurent : {resDetails.name}</h1>
      <img src={Img_CDN + resDetails.cloudinaryImageId} />
      <h2>{resDetails.costForTwoMessage}</h2>
      <h3>{resDetails.avgRating}</h3>
      <div>
        <h1>Menu</h1>
      </div>
    </div>
  );
};

export default Menu;
