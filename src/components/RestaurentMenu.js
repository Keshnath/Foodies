import { useParams } from "react-router-dom";
import Shimer from "./shimer";
import { Img_CDN } from "../constant";
import useRestaurent from "../../utils/useRestaurentMenu";
import useMenu from "../../utils/useMenu";
import { useDispatch } from "react-redux";
import { addItems } from "../../utils/cartSlice";

const Menu = () => {
  const { id } = useParams();

  const resDetails = useRestaurent(id);
  const dispatch = useDispatch();

  const MenuDetails = useMenu(id);
  const items = MenuDetails?.data?.menu?.items;
  // console.log(MenuDetails?.data?.menu?.items)

  if (!resDetails) {
    return <Shimer />;
  }

  return (
    <div className="flex ">
      <div className="w-52 m-5">
        <h1 className="text-lg ">Restaurent : {resDetails.name}</h1>
        <h2 className="py-2">restaurantId : {resDetails.id}</h2>
        <img
          className="rounded-md"
          src={Img_CDN + resDetails.cloudinaryImageId}
        />
        <h2 className="py-3">{resDetails.costForTwoMessage}</h2>
        <h3>{resDetails.avgRating}</h3>
      </div>
      
      <div>
        <h1 className="text-xl py-2">Menu</h1>
        <ul>
          {Object.values(items).map((e) => (
            <li key={e.id}>
              {e.name} ---- {e.price / 100}
              <button
                className="bg-green-200 m-2 p-2"
                onClick={() => {
                  dispatch(addItems(e));
                }}
              >
                Add
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
