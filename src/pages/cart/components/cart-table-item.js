import { updatedFullCart } from "C:/Users/ASUS/OneDrive/Masaüstü/React/e-commerce_react_app_reduxtoolkit/src/redux/cartSlice"
import { useDispatch, useSelector } from "react-redux";


import useApi from "../../../hooks/useApi";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const CartTableItem = (props, product) => {

  console.log(">>>  CartTableItem props", props);

  const cartState = useSelector((state) => state.cartState);

  console.log(">>>  CartTableItem cartState", cartState);

  const api = useApi();
  const dispatch = useDispatch();
  const params = useParams();
  const [images, setImages] = useState(null);

  const onQuantityChange = (e) => {
    const patchData = {
      "quantity": parseInt(e.target.value),
    }
    api.patch(`shop/orders/${cartState.tokenValue}/items/${props.id}`,
      patchData,
      { headers: { 'Content-Type': 'application/merge-patch+json' }, })
      //apiden gelen patch headersi farklı oldugu için burada headers seklinde apiden gelen tipe göre headers belirledik
      .then((patchRes) => {
        dispatch(updatedFullCart(patchRes.data));
        //console.log(">>>  onQuantityChangePatch res", patchRes);
      })
      .catch((err) => {
        console.log(">>>  onQuantityChangePatch err", err);
      })
    // console.log(">> onQuantityChange", e.target.value);
  };
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
  //       const getData = {
  //         "id": res.data[0].id,
  //         "type": "main",
  //         "path": "https://ecommerce-api.udemig.dev/media/cache/resolve/sylius_small/02/4d/ddaa2e3ddb435ee0474257edcd56.jpg"
  //       }
  //       api.get(`shop/product-images/${res.data[0].id}`, getData)
  //         .then((res) => {
  //           setImages(res)
  //           // console.log("res images dizi", images.data.path)
  //           // console.log(">>> images get res", res)
  //         })
  //         .catch((error) => {
  //           console.log(">> images get error", error)
  //         })
  //     })
  //     .catch((err) => { });
  // }, []);



  const deleteCartItem = () => {
    api.delete(`shop/orders/${cartState.tokenValue}/items/${props.id}`)
      .then((res) => {
        api
          .get(`shop/orders/${cartState.tokenValue}`,)
          .then((res) => {
            dispatch(updatedFullCart(res.data));
            // console.log("delete cart uptadeted res", res);
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
        {/* <img src="/images/google_logo.png" alt="" /> */}

        {/* {images.data.path ? (
          <> <a href="#">
            <img style={{ height: "60px" }} src={"https://ecommerce-api.udemig.dev" + images.data.path} alt="" />
          </a></>) : (<>  <a href="#">
            <img src={"https://ecommerce-api.udemig.dev"} alt="" />
          </a></>)} */}

        <span>
          <Link href="#">{props.productName}</Link>
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
        <button onClick={deleteCartItem} className="btn-light btn-close">
          <i className="fa fa-times-circle-o"></i>
        </button>
      </th>
    </tr>
  );
};

export default CartTableItem;
