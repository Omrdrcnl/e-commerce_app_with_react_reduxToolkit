import ProductItem from "../product-item";

function ProductList(props) {
  // console.log(">> PRODUCT LIST PROPS", props);
  const productComponents = [];

  props.item.map((item, index) => {
    productComponents.push(<ProductItem item={item} key={index} />);
  });

  return (
    <div className="col-lg-9 col-md-9 col-sm-8 col-xs-12">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb10 alignright">
          <form>
            <div className="select-option form-group">
              <select name="select" className="form-control">
                <option value="">Select</option>
                <option value="">Best Match</option>
                <option value="">Low Price</option>
                <option value="">High Price</option>
              </select>
            </div>
          </form>
        </div>
      </div>
      {productComponents}
    </div>
  );
}

export default ProductList;
