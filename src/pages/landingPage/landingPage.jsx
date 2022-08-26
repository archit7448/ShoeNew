import mainImage from "../../assets/Image.png";
import { Header, Genres } from "../../components/index";
import "./landingPage.css";
import { Link, useNavigate } from "react-router-dom";
import { useData } from "../../context/dataContext";
export const HomePage = () => {
  const { dispatch } = useData();
  const navigate = useNavigate();
  return (
    <main>
      <Header />
      <section className="top-0px">
        <div className="homepage-main">
          <div className="relative">
            <img
              src={
                "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1661431073/nike-just-do-it_c4m8ql.jpg"
              }
              className="air-max-540-greater"
            />
            <img
              src={
                "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1661431898/nike-just-do-it_poutg9.jpg"
              }
              className="air-max-540-less"
            />
            <div
              onClick={() => {
                navigate("/products");
                dispatch({ type: "TOGGLE_CATEGORY", payload: "Jordan" });
              }}
            >
              <img
                src={
                  "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1661431467/jordan_bj4qjm.jpg"
                }
                className="cursor"
              />
            </div>
            <div className="blockquote-product">
              <blockquote>You can find best shoes here!</blockquote>
              <Link to="/products">
                <button className="button button-primary button-blockquote">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="categories-type">
          <Genres />
        </div>
      </section>
    </main>
  );
};
