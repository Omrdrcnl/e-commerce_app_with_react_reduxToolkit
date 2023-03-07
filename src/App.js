import { Carousel } from "react-responsive-carousel";
import Header from "./compenents/header";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "./compenents/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Category from "./pages/category";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  return (
    <div className="">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
