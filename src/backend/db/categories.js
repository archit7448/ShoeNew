import { v4 as uuid } from "uuid";
import { Images } from "../Images/images";
/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Jordan",
    image:
      "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1661435197/jordan_rp4l0k.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Nike",
    image:
      "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1661436329/nike-just-do-it_jfk2er.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Puma",
    image:
      "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1661438498/Image_2_l8aogc.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Addidas",
    image:
      "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1661438865/594x792_B_tcm209-920685_algopi.jpg",
  },
];
