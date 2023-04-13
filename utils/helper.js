export function filterData(RestaurentList, searchText) {
  const data = RestaurentList.filter((e) =>
    e.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
  // console.log(data);
  return data;
}
