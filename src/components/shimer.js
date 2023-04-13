const Shimer = () => {
  return (
    <div className="shimmer">
      {Array(20)
        .fill("")
        .map((e, ind) => (
          <div className="load" key={ind}>
            <div className="load-img"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimer;
