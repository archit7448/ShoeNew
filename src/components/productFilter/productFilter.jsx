import { useData } from "../../context/dataContext";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { useState } from "react";
export const ProductFilter = () => {
  const { state, dispatch } = useData();
  const { filter } = state;
  const { category } = filter;
  const { Nike, Jordan, Puma, Addidas } = category;
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="filter-type-wrapper">
        <h3>Category</h3>
        <h3
          className="cursor text-grey"
          onClick={() => setShow((state) => !state)}
        >
          {show ? <IoMdRemove /> : <IoMdAdd />}
        </h3>
      </div>
      {show && (
        <div className="category-wrapper">
          <label>
            <input
              type="checkbox"
              checked={Nike}
              onChange={() =>
                dispatch({ type: "TOGGLE_CATEGORY", payload: "Nike" })
              }
            />
            Nike
          </label>
          <label>
            <input
              type="checkbox"
              checked={Addidas}
              onChange={() =>
                dispatch({ type: "TOGGLE_CATEGORY", payload: "Addidas" })
              }
            />
            Addidas
          </label>
          <label>
            <input
              type="checkbox"
              checked={Puma}
              onChange={() =>
                dispatch({ type: "TOGGLE_CATEGORY", payload: "Puma" })
              }
            />
            Puma
          </label>
          <label>
            <input
              type="checkbox"
              checked={Jordan}
              onChange={() =>
                dispatch({ type: "TOGGLE_CATEGORY", payload: "Jordan" })
              }
            />
            Jordan
          </label>
        </div>
      )}
    </div>
  );
};
