import { useDispatch, useSelector } from "react-redux";
import useApi from "../../../hooks/useApi";
import { updatedFullCart } from "C:/Users/ASUS/OneDrive/Masaüstü/React/e-commerce_react_app_reduxtoolkit/src/redux/cartSlice"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const CartTableItem = (props) => {

  console.log(">>>  CartTableItem props", props);
  const cartState = useSelector((state) => state.cartState);
  console.log(">>>  CartTableItem cartState", cartState);
  const api = useApi();
  const dispatch = useDispatch();
  const onQuantityChange = (e) => {
    const patchData = {
      "quantity": parseInt(e.target.value),
    }
    api.patch(`shop/orders/${cartState.tokenValue}/items/${props.id}`,
      patchData,
      { headers: { 'Content-Type': 'application/merge-patch+json' }, })
      //apiden gelen patch headersi farklı oldugu için burada headers seklinde apiden gelen tipe göre headers belirledik
      .then((res) => {
        dispatch(updatedFullCart(res.data));
        // console.log(">>>  onQuantityChangePatch res", res);
      })
      .catch((err) => {
        console.log(">>>  onQuantityChangePatch err", err);
      })
    // console.log(">> onQuantityChange", e.target.value);
  };
  // const [products, setProducts] = useState([]);
  // const params = useParams();
  // useEffect(() => {
  //   const urlQueryData = {};
  //   urlQueryData["productTaxons.taxon.code"] = params.taxon_code;
  //   urlQueryData["order[code]"] = "asc";
  //   urlQueryData["order[createdAt]"] = "asc";

  //   // console.log(">>> urlQueryData", urlQueryData);

  //   api
  //     .get("shop/products", { params: urlQueryData })
  //     .then((res) => {
  //       console.log(">>  PRODUCT DATA", res.data);
  //       setProducts(res.data);
  //     })
  //     .catch((err) => { });
  // }, []);

  // console.log(">>>  CartTableItem products", products);
  // const productComponents = []
  // products.items.map((item, index) => {

  // })
  const deleteCartItem = () => {
    api.delete(`shop/orders/${cartState.tokenValue}/items/${props.id}`)
      .then((res) => {
        api
          .get(`shop/orders/${cartState.tokenValue}`,)
          .then((res) => {
            dispatch(updatedFullCart(res.data));
            console.log("delete cart uptadeted res", res);
          })
          .catch((err) => {
            console.log("delete cart uptadeted err", err);
          });
        console.log(">>>  deleteCartItem res", res);
      }).catch((err) => {
        console.log(">>>  deleteCartItem err", err);
      })
  }

  return (
    <tr>
      <td>
        <a href="#">
          <img src="/images/cart_product_1.png" alt="" />
        </a>
        <span>
          <a href="#">{props.productName}</a>
        </span>
      </td>
      <td>
        {props.unitPrice}
        &nbsp;
        {cartState.currencyCode}</td>
      <td>
        <div className="product-quantity">
          <div className="quantity">
            <input
              type="number"
              className="input-text qty text"
              step="1"
              min="1"
              max="10"
              name="quantity"
              defaultValue={props.quantity}
              title="Qty"
              size="4"
              pattern="[0-9]*"
              onChange={onQuantityChange}
            />
          </div>
        </div>
      </td>
      <td>{props.total}
        &nbsp;
        {cartState.currencyCode}</td>
      <th scope="row">
        <button onClick={deleteCartItem} className="btn-light btn btn-close">
          <i className="fa fa-times-circle-o"></i>
        </button>
      </th>
    </tr>
  );
};

export default CartTableItem;
