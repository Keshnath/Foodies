import { Card } from "../constant";
import { ResturantCard } from "./RestaurentCard";
import { useState } from "react";

function filterData(RestaurentList , searchText){
  const data = RestaurentList.filter(e => e.data.name.includes(searchText));
  console.log(data)
  return data
}

let Body = () => {
  const [searchText, setSearchText] = useState("");
  const [RestaurentList, setRestaurentList] = useState(Card);
  
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search.."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const data = filterData(RestaurentList, searchText);
            setRestaurentList(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurent-list">
        {RestaurentList.map((e) => {
          return <ResturantCard {...e.data} key={e.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
