const Shimer = () => {
  return (
    <div className="flex flex-wrap justify-between m-5">
      {Array(20)
        .fill("")
        .map((e, ind) => (
          <div className="h-72 w-56 m-4 bg-gray-200 rounded-md" key={ind}>
            <div className="h-28 w-13 mt-5 border bg-white rounded-md"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimer;
