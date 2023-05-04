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
    <Shimer/>
  ) : (
    <>
      <div className="m-10 box-border  ">
        <input className="border border-black rounded-md r"
          type="text"
          placeholder="Search.."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="bg-green-200 rounded-md text-black px-2 text-center  ml-2 "
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
