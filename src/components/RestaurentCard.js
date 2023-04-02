import { Img_CDN } from "../constant"


export const ResturantCard = ({name ,cuisines,totalRatingsString ,cloudinaryImageId})=>{
    return (
      <div className="card">
        <img src={Img_CDN + cloudinaryImageId} />
        <h2>{name}</h2>
        <h4>{cuisines.join(",")}</h4>
        <h6>{totalRatingsString}</h6>
      </div>
    )
  }
  