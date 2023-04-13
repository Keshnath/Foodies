import { useState, useEffect } from "react";

const useMenu = (id) => {
  const [menu, setmenu] = useState();

  async function getData(id) {
    let data = await fetch(
      "https://www.swiggy.com/dapi/menu/quick?menuId=" + id + "&categories=true"
    );
    let json = await data.json();
    setmenu(json);
  }
  useEffect(() => {
    getData(id);
  }, []);

  return menu;
};

export default useMenu;
