import { Card } from "../constant";
import { ResturantCard } from "./RestaurentCard";
import { useEffect, useState } from "react";
import Shimer from "./shimer";
import { Link } from "react-router-dom";
// import Menu from "./RestaurentMenu";

function filterData(RestaurentList, searchText) {
  const data = RestaurentList.filter((e) =>
    e.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
  // console.log(data);
  return data;
}

// json.data.cards[2].data.data.cards

let Body = () => {
  const [searchText, setSearchText] = useState("");
  const [RestaurentList, setRestaurentList] = useState([]);
  const [searchList, setsearchList] = useState([]);

  async function Apicall() {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.4704651&lng=80.2407399&page_type=DESKTOP_WEB_LISTING"
    );
    let json = await data.json();
    // optional chaining
    let cardList = json?.data?.cards[2]?.data?.data?.cards;
    setRestaurentList(cardList);
    setsearchList(cardList);
  }

  useEffect(() => {
    Apicall();
  }, []);

  return RestaurentList.length === 0 ? (
    <Shimer />
  ) : (
    <>
      <div className="search-bar">
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
            setsearchList(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurent-list">
        {searchList.map((e) => {
          return (
            <Link to={"/restaurent/" + e.data.id} key={e.data.id}>
              <ResturantCard {...e.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
