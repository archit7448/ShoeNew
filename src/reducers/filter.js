const removeComma = (price) =>
  Number(
    price
      .split("")
      .filter((x) => x !== ",")
      .join("")
  );

export const SortedFunction = (products, sortBy) => {
  if (sortBy && sortBy === "high to low") {
    return [...products].sort(
      (a, b) => Number(removeComma(b.price)) - Number(removeComma(a.price))
    );
  }
  if (sortBy && sortBy === "low to high") {
    return [...products].sort(
      (a, b) => Number(removeComma(a.price)) - Number(removeComma(b.price))
    );
  }
  return products;
};

export const CategoryFilter = (products, category) => {
  const categoryArray = Object.keys(category).filter(
    (value) => category[value] === true
  );
  return categoryArray.length === 0
    ? products
    : products.filter(({ category }) => {
        const getData = (category) => {
          return categoryArray.filter((value) => value === category);
        };
        return getData(category).length === 0 ? false : true;
      });
};

export const RatingFilter = (products, ratingState) => {
  return ratingState === 0
    ? products
    : [...products].filter(({ ratings }) => ratings >= ratingState);
};

export const PriceFilter = (products, Stateprice) => {
  return Stateprice === 1000
    ? products
    : [...products].filter(
        ({ price }) => Number(Stateprice) >= Number(removeComma(price))
      );
};

const searchAlgo = (word, string) => {
  for (let i = 0; i < string.length; i++) {
    return word.includes(string.slice(0, string.length - i));
  }
};

export const SearchFilter = (products, search) => {
  const FilterArray = [...products].filter(({ title }) =>
    searchAlgo(title.toLowerCase(), search.toLowerCase())
  );
  return search === "" ? [] : FilterArray.slice(0, 3);
};
