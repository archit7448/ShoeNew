export const intialstate = {
  products: [],
  categories: [],
  filter: {
    sortBy: null,
    category: {
      Nike: false,
      Addidas: false,
      Puma: false,
      Jordan: false,
    },
    ratings: 0,
    price: 30000,
  },
  encodedToken: localStorage.getItem("token"),
  cart: [],
  wishlist: [],
  search: "",
  couponPrice: 0,
  isFilter: false,
  order: [],
};
