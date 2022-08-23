import {
  Header,
  ProductFilter,
  Sort,
  RatingsComponent,
} from "../../components/index";
import { MdOutlineClear } from "react-icons/md";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import {
  CategoryFilter,
  SortedFunction,
  RatingFilter,
  PriceFilter,
} from "../../reducers/filter";
import "./explorePage.css";
import { useData } from "../../context/dataContext";
import { ProductCard } from "../../components/cardProduct/cardProduct";
import { useState } from "react";
export const ProductPage = () => {
  const [filterShow, setFilterShow] = useState(false);
  const [show, setShow] = useState(false);
  let PriceFilterArray = [5000, 10000, 15000, 20000];
  const { products, sortBy, category, ratings, price, dispatch } = useData();
  const sortedData = SortedFunction(products, sortBy);
  const categoryData = CategoryFilter(sortedData, category);
  const RatingData = RatingFilter(categoryData, ratings);
  const PriceData = PriceFilter(RatingData, price);
  return (
    <main>
      <Header />
      <div
        className={`filters-wrapper ${
          filterShow ? "translate-0" : "translate-hide"
        }`}
      >
        <div className="flex-row flex-space-between filter-type-wrapper">
          <h2>Filters</h2>
          <h2 className="cursor" onClick={() => setFilterShow(false)}>
            <MdOutlineClear />{" "}
          </h2>
        </div>
        <hr />
        <RatingsComponent />
        <hr />
        <Sort />
        <hr />
        <ProductFilter />
        <hr />
        <div className="price-wrapper">
          <div className="filter-type-wrapper">
            <h3>Price</h3>
            <h3
              className="cursor text-grey"
              onClick={() => setShow((state) => !state)}
            >
              {show ? <IoMdRemove /> : <IoMdAdd />}
            </h3>
          </div>
          <div className="flex-col">
            {show &&
              PriceFilterArray.map((value) => {
                return (
                  <label key={value} className="flex-row">
                    <input
                      type="radio"
                      name="PriceFilter"
                      onClick={() =>
                        dispatch({ type: "PRICE_FILTER", payload: value })
                      }
                    />
                    <h3>{value}& Less</h3>
                  </label>
                );
              })}
          </div>
        </div>
        <hr />
      </div>
      <section className="product-heading">
        <h1 className="cart-heading">Showing Products [{PriceData.length}]:</h1>
        <div className="card-container">
          <div className="flex-row flex-wrap flex-center">
            {Object.keys(category).map((valueKey, index) => {
              if (category[valueKey] === true) {
                return (
                  <div
                    className="chips-container"
                    key={index}
                    onClick={() =>
                      dispatch({ type: "TOGGLE_CATEGORY", payload: valueKey })
                    }
                  >
                    <h2>Product Type: {valueKey}</h2>
                    <h1>
                      <MdOutlineClear />{" "}
                    </h1>
                  </div>
                );
              }
            })}
            {sortBy !== null && (
              <div
                className="chips-container"
                onClick={() => dispatch({ type: "SORT", payload: null })}
              >
                <h2>Sort: {sortBy}</h2>
                <h1>
                  <MdOutlineClear />{" "}
                </h1>
              </div>
            )}
            {ratings !== 0 && (
              <div
                className="chips-container"
                onClick={() => dispatch({ type: "RATING_TOGGLE", payload: 0 })}
              >
                <h2>Ratings: {ratings}& above</h2>
                <h1>
                  <MdOutlineClear />{" "}
                </h1>
              </div>
            )}
            {price !== 30000 && (
              <div
                className="chips-container"
                onClick={() =>
                  dispatch({ type: "PRICE_FILTER", payload: 30000 })
                }
              >
                <h2>Price: {price}& less</h2>
                <h1>
                  <MdOutlineClear />{" "}
                </h1>
              </div>
            )}
            {(price !== 30000 ||
              ratings !== 0 ||
              sortBy !== null ||
              Object.keys(category).some(
                (value) => category[value] === true
              )) && (
              <button
                className="clear-button"
                onClick={() => dispatch({ type: "CLEAR" })}
              >
                Clear All
              </button>
            )}
          </div>
          <button
            className="button button-secondary button-sort"
            onClick={() => setFilterShow((state) => !state)}
          >
            Sort & Filter
          </button>
          <div className="card-wrapper">
            {PriceData.map((products) => {
              return <ProductCard key={products._id} prop={{ products }} />;
            })}
          </div>
        </div>
      </section>
    </main>
  );
};
