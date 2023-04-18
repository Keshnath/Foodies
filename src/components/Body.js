import { ResturantCard } from "./RestaurentCard";
import { useEffect, useState } from "react";
import Shimer from "./shimer";
import { Link } from "react-router-dom";
import { filterData } from "../../utils/helper";
import { CARD_URl } from "../constant";
import useIsonline from "../../utils/useIsonline";

let Body = () => {
  const [searchText, setSearchText] = useState("");
  const [RestaurentList, setRestaurentList] = useState([]);
  const [searchList, setsearchList] = useState([]);

  async function Apicall() {
    let data = await fetch(CARD_URl);
    let json = await data.json();

    // optional chaining
    let cardList = json?.data?.cards[2]?.data?.data?.cards;
    setRestaurentList(cardList);
    setsearchList(cardList);
  }

  useEffect(() => {
    Apicall();
  }, []);

  const isOnline = useIsonline();

  if (!isOnline) {
    return <h1>OOps something wents wrong seems like you are offline !</h1>;
  }

  return RestaurentList.length === 0 ? (
    <Shimer />
  ) : (
    <>
      <div className="m-10 box-border ">
        <input
          type="text"
          placeholder="Search.."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="bg-slate-600 rounded-md text-white  "
          onClick={() => {
            const data = filterData(RestaurentList, searchText);
            setsearchList(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap justify-between m-5  ">
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
