import { Carousel } from "react-responsive-carousel";

function Home() {
  return (
    <>
      <Carousel
        className="space-medium container"
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
      <div className="space-medium">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <div className="showcase-block">
                <div className="display-logo ">
                  <a href="#">
                    {" "}
                    <img src="images/nexus.png" alt="" />
                  </a>
                </div>
                <div className="showcase-img">
                  <a href="#">
                    {" "}
                    <img src="images/display_img_1.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="showcase-block active">
                <div className="display-logo alignleft">
                  <a href="#">
                    {" "}
                    <img src="images/iphone.png" alt="" />
                  </a>
                </div>
                <div className="showcase-img">
                  <a href="#">
                    {" "}
                    <img src="images/display_img_2.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <div className="showcase-block ">
                <div className="display-logo ">
                  <a href="#">
                    {" "}
                    <img src="images/samsung.png" alt="" />
                  </a>
                </div>
                <div className="showcase-img">
                  <a href="#">
                    <img src="images/display_img_3.png" alt="" />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="showcase-block">
                <div className="display-logo ">
                  <a href="#">
                    <img src="images/htc.png" alt="" />
                  </a>
                </div>
                <div className="showcase-img">
                  <a href="#">
                    <img src="images/display_img_4.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="showcase-block">
                <div className="display-logo">
                  <a href="#">
                    {" "}
                    <img src="images/alcatel.png" alt="" />
                  </a>
                </div>
                <div className="showcase-img">
                  <a href="#">
                    {" "}
                    <img src="images/display_img_5.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="showcase-block">
                <div className="display-logo ">
                  <a href="#">
                    <img src="images/pixel.png" alt="" />
                  </a>
                </div>
                <div className="showcase-img">
                  <a href="#">
                    {" "}
                    <img src="images/display_img_6.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="showcase-block">
                <div className="display-logo ">
                  <a href="#">
                    {" "}
                    <img src="images/vivo.png" alt="" />
                  </a>
                </div>
                <div className="showcase-img">
                  <a href="#">
                    <img src="images/display_img_7.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="box">
              <div className="box-head">
                <h3 className="head-title">Latest Product</h3>
              </div>
              <div className="box-body">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="product-block">
                      <div className="product-img">
                        <img src="images/product_img_1.png" alt="" />
                      </div>
                      <div className="product-content">
                        <h5>
                          <a href="#" className="product-title">
                            Google Pixel <strong>(128GB, Black)</strong>
                          </a>
                        </h5>
                        <div className="product-meta">
                          <a href="#" className="product-price">
                            $1100
                          </a>
                          <a href="#" className="discounted-price">
                            $1400
                          </a>
                          <span className="offer-price">20%off</span>
                        </div>
                        <div className="shopping-btn">
                          <a href="#" className="product-btn btn-like">
                            <i className="fa fa-heart"></i>
                          </a>
                          <a href="#" className="product-btn btn-cart">
                            <i className="fa fa-shopping-cart"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="product-block">
                      <div className="product-img">
                        <img src="images/product_img_2.png" alt="" />
                      </div>
                      <div className="product-content">
                        <h5>
                          <a href="#" className="product-title">
                            HTC U Ultra <strong>(64GB, Blue)</strong>
                          </a>
                        </h5>
                        <div className="product-meta">
                          <a href="#" className="product-price">
                            $1200
                          </a>
                          <a href="#" className="discounted-price">
                            $1700
                          </a>
                          <span className="offer-price">10%off</span>
                        </div>
                        <div className="shopping-btn">
                          <a href="#" className="product-btn btn-like">
                            <i className="fa fa-heart"></i>
                          </a>
                          <a href="#" className="product-btn btn-cart">
                            <i className="fa fa-shopping-cart"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="product-block">
                      <div className="product-img">
                        <img src="images/product_img_3.png" alt="" />
                      </div>
                      <div className="product-content">
                        <h5>
                          <a href="#" className="product-title">
                            Samsung Galaxy Note 8
                          </a>
                        </h5>
                        <div className="product-meta">
                          <a href="#" className="product-price">
                            $1500
                          </a>
                          <a href="#" className="discounted-price">
                            $2000
                          </a>
                          <span className="offer-price">40%off</span>
                        </div>
                        <div className="shopping-btn">
                          <a href="#" className="product-btn btn-like">
                            <i className="fa fa-heart"></i>
                          </a>
                          <a href="#" className="product-btn btn-cart">
                            <i className="fa fa-shopping-cart"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="product-block">
                      <div className="product-img">
                        <img src="images/product_img_4.png" alt="" />
                      </div>
                      <div className="product-content">
                        <h5>
                          <a href="#" className="product-title">
                            Vivo V5 Plus <strong>(Matte Black)</strong>
                          </a>
                        </h5>
                        <div className="product-meta">
                          <a href="#" className="product-price">
                            $1500
                          </a>
                          <a href="#" className="discounted-price">
                            $2000
                          </a>
                          <span className="offer-price">15%off</span>
                        </div>
                        <div className="shopping-btn">
                          <a href="#" className="product-btn btn-like">
                            <i className="fa fa-heart"></i>
                          </a>
                          <a href="#" className="product-btn btn-cart">
                            <i className="fa fa-shopping-cart"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-default pdt40 pdb40">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="feature-left">
                <div className="feature-outline-icon">
                  <i className="fa fa-credit-card"></i>
                </div>
                <div className="feature-content">
                  <h3 className="text-white">Safe Payment</h3>
                  <p>
                    Praesent orci dolor, pretium vitae hendrerit convallisutes
                    orcgravida bibendum.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="feature-left">
                <div className="feature-outline-icon">
                  <i className="fa fa-users"></i>
                </div>
                <div className="feature-content">
                  <h3 className="text-white">24/7 Help Center</h3>
                  <p>
                    Aliquam molestie urnased one pharetra vestibulum Interdum et
                    malesuada fames.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="feature-left feature-circle">
                <div className="feature-outline-icon">
                  <i className="fa fa-rotate-left "></i>
                </div>
                <div className="feature-content">
                  <h3 className="text-white">Free &amp; Easy Return</h3>
                  <p>
                    Vivamus semper nisnesbla accumsan dui justo esw finibus
                    turpis serom.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="feature-left">
                <div className="feature-outline-icon">
                  <i className="fa fa-dollar"></i>
                </div>
                <div className="feature-content">
                  <h3 className="text-white">Great Value</h3>
                  <p>
                    Morbi necmi turpiulm tristiq ueipsm inodiopharetr amal esuat
                    erdumetalesuada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
