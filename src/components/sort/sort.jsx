import { useData } from "../../context/dataContext";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { useState } from "react";
export const Sort = () => {
  const { dispatch } = useData();
  const [show, setShow] = useState(false);
  return (
    <div className="sort-container">
      <div className="filter-type-wrapper">
        <h3>Sort</h3>
        <h3
          className="cursor text-grey"
          onClick={() => setShow((state) => !state)}
        >
          {show ? <IoMdRemove /> : <IoMdAdd />}
        </h3>
      </div>
      {show && (
        <div className="sort-wrapper">
          <label>
            <input
              type="radio"
              name="PriceSort"
              onClick={() => dispatch({ type: "SORT", payload: "high to low" })}
            />
            High to low
          </label>
          <label>
            <input
              type="radio"
              name="PriceSort"
              onClick={() => dispatch({ type: "SORT", payload: "low to high" })}
            />
            Low to high
          </label>
        </div>
      )}
    </div>
  );
};
