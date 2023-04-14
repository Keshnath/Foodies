import { Img_CDN } from "../constant";

export const ResturantCard = ({
  name,
  cuisines,
  totalRatingsString,
  cloudinaryImageId,
}) => {
  return (
    <div className="h-72 w-56 m-4  break-words border-current shadow-lg rounded-md" >
      <img className="rounded-md" src={Img_CDN + cloudinaryImageId} />
      <div className="p-2">
      <h2 className="text-lg font-bold capitalize ">{name}</h2>
      <h4 className="text-sm">{cuisines.join(",")}</h4>
      <h6 className="text-xs">{totalRatingsString}</h6>
      </div>
      
      
    </div>
  );
};
