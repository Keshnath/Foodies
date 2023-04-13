
import { useParams } from "react-router-dom";
import Shimer from "./shimer";
import { Img_CDN } from "../constant";
import useRestaurent from "../../utils/useRestaurentMenu";
import useMenu from "../../utils/useMenu";

const Menu = () => {
  const { id } = useParams();

  const resDetails = useRestaurent(id);

  const MenuDetails = useMenu(id);
  // console.log(MenuDetails?.data?.menu?.items)

  if (!resDetails) {
    return <Shimer />;
  }

  return (
    <div className="menu-items">
      <div>
        <h1>Restaurent : {resDetails.name}</h1>
        <h2>restaurantId : {resDetails.id}</h2>
        <img src={Img_CDN + resDetails.cloudinaryImageId} />
        <h2>{resDetails.costForTwoMessage}</h2>
        <h3>{resDetails.avgRating}</h3>
      </div>

      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(MenuDetails?.data?.menu?.items).map((e) => (
            <li key={e.id}>{e.name} ---- {e.price / 100}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
