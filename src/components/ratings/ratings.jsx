import "./ratings.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { useData } from "../../context/dataContext";
import { useState } from "react";
export const RatingsComponent = () => {
  const { state, dispatch } = useData();
  const { filter } = state;
  const { ratings } = filter;
  const arrayRatings = { 1: [1], 2: [1, 2], 3: [1, 2, 3], 4: [1, 2, 3, 4] };
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="filter-type-wrapper">
        <h3>Ratings</h3>
        <h3
          className="cursor text-grey"
          onClick={() => setShow((state) => !state)}
        >
          {show ? <IoMdRemove /> : <IoMdAdd />}
        </h3>
      </div>
      {show && (
        <div className="ratings-wrapper">
          {Object.keys(arrayRatings).map((value) => {
            let array = arrayRatings[value];
            return (
              <label key={value}>
                <input
                  type="radio"
                  name="ratings"
                  checked={value === ratings}
                  onClick={() =>
                    dispatch({ type: "RATING_TOGGLE", payload: value })
                  }
                />
                {array.map((value) => {
                  return ratings == array.length ? (
                    <AiFillStar className="ratings-color" key={value} />
                  ) : (
                    <AiOutlineStar className="ratings" key={value} />
                  );
                })}
                <h3>& above</h3>
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
};
