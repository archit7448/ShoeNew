import loader from "../../assets/loader.svg";

const Loader = () => {
  return (
    <div className="flex-center width-100">
      <img src={loader} className="loader" />
    </div>
  );
};

export { Loader };
