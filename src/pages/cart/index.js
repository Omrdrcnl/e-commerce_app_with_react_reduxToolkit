import { useSelector } from "react-redux";
import useApi from ".././/../hooks/useApi";
import CartTableItem from "./components/cart-table-item";

const Cart = () => {
  const cartState = useSelector((state) => state.cartState);

  if (cartState.id === null) {
    return <div className="space-medium">
      <div className="container">
        <div className="row">
          <h1 className="text-center">Loading..</h1>
        </div>
      </div>
    </div>
  }


  const cartTableItems = [];

  cartState.items.map((item, index) => {
    cartTableItems.push(<CartTableItem {...item} index={index} />);
  });

  return (
    <div className="space-medium">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
            <div className="box">
              <div className="box-head">
                <h3 className="head-title">My Cart (02)</h3>
              </div>
              <div className="box-body">
                <div className="table-responsive">
                  <div className="cart">
                    <table className="table table-bordered ">
                      <thead>
                        <tr>
                          <th>
                            <span>Item</span>
                          </th>
                          <th>
                            <span>Price</span>
                          </th>
                          <th>
                            <span>Quantity</span>
                          </th>
                          <th>
                            <span>Total</span>
                          </th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>{cartTableItems}</tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <a href="#" className="btn-link">
              <i className="fa fa-angle-left"></i> back to shopping
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div className="box mb30">
              <div className="box-head">
                <h3 className="head-title">Price Details</h3>
              </div>
              <div className="box-body">
                <div className=" table-responsive">
                  <div className="pay-amount ">
                    <table className="table mb20">
                      <tbody>
                        <tr>
                          <th>
                            <span>Price ({cartState.items.length} items)</span>
                          </th>
                          <td>
                            {cartState.itemsTotal}
                            {/* // {cartState.items.reduce((currentTotal, item) => currentTotal + item.subtotal, 0)} */}
                            &nbsp;
                            {cartState.currencyCode}
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <span>Tax Total</span>
                          </th>
                          <td>
                            <strong className="text-green">
                              {cartState.taxTotal}
                              &nbsp;
                              {cartState.currencyCode}
                            </strong>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <span>Delivery Charges</span>
                          </th>
                          <td>
                            {cartState.shippingTotal == 0 ?
                              <strong className="text-green">Free</strong> :
                              <>{cartState.shippingTotal}
                                &nbsp;
                                {cartState.currencyCode}</>}

                          </td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr>
                          <th>
                            <span className="mb0" style={{ fontWeight: 700 }}>
                              Total Amount Pay
                            </span>
                          </th>
                          <td style={{ fontWeight: 700, color: "#1c1e1e" }}>
                            {cartState.total}
                            &nbsp;
                            {cartState.currencyCode}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <button className="btn btn-primary btn-block">
                    Proceed To Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
