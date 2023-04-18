import { Img_CDN } from "../constant";

const CartItems = ({ name, cloudinaryImageId, price }) => {
  return (
    <div className="h-72 w-56 m-4  break-words border-current shadow-lg rounded-md">
      <img className="rounded-md" src={Img_CDN + cloudinaryImageId} />
      <div className="p-2">
        <h2 className="text-lg font-bold capitalize ">{name}</h2>
        <h6 className="text-xs">{price / 100}</h6>
      </div>
    </div>
  );
};

export default CartItems;
