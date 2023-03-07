import { Carousel } from "react-responsive-carousel";
import Header from "./compenents/header";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel
        showArrows={true}
        onChange={() => {}}
        onClickItem={() => {}}
        onClickThumb={() => {}}
      >
        <div>
          <img src="/images/slider_1.jpg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="/images/slider_2.jpg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="/images/slider_3.jpg" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
}

export default App;
