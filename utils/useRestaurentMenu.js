import { useState, useEffect } from "react";
import { MENU_URL } from "../src/constant";

const useRestaurent = (id) => {
  const [resDetails, setresDetails] = useState(null);
  const [menu, setmenu] = useState(null);

  async function getDetails() {
    let data = await fetch(MENU_URL + id);
    let json = await data.json();

    setresDetails(json?.data?.cards[0]?.card?.card?.info);
    // setmenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
  }

  useEffect(() => {
    getDetails();
  }, []);

  return resDetails;
};

export default useRestaurent;
