import Header from "./compenents/header";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "./compenents/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Category from "./pages/category";
import Login from "./pages/login";
import Register from "./pages/register";
import { useDispatch, useSelector } from "react-redux";
import useApi from "./hooks/useApi";
import { set_categories } from "./redux/categorySlice";
import Cart from "./pages/cart";
import { setTokenValue, updatedFullCart } from "./redux/cartSlice";

function App() {
  const categoryState = useSelector((state) => state.categoryState);
  console.log("categorystate", categoryState);
  const api = useApi();
  const dispatch = useDispatch();

  if (categoryState.categories === null) {
    api
      .get("shop/taxons")
      .then((res) => {
        console.log("taxons res", res);
        dispatch(set_categories({ categories: res.data }));
        return;
      })
      .catch((err) => {
        console.log("<<< taxon api", err);
      });
  }
  const cartState = useSelector((state) => state.cartState);

  if (!cartState.tokenValue) {
    const postData = {
      localeCode: "en_US",
    };
    api
      .post("shop/orders", postData)
      .then((res) => {
        dispatch(
          setTokenValue({
            tokenValue: res.data.tokenValue,
          })
        );
        console.log(">>  cart res", res);
      })
      .catch((err) => {
        console.log(">>  cart err", err);
      });
  } else if (!cartState.id) {
    api.get(`shop/orders/${cartState.tokenValue}`)
      .then((res) => {
        dispatch(updatedFullCart(res.data));
        console.log(">>  cart res", res);
      })
      .catch((err) => { console.log(">>  cart err", err) });
  }

  return (
    <div className="">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:taxon_code" element={<Category />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
