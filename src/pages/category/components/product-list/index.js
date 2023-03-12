import ProductItem from "../product-item";

function ProductList(props) {
  console.log(">> PRODUCT LIST PROPS", props);
  const productCmponents = [];

  props.item.map((item, index) => {
    productCmponents.push(<ProductItem item={item} key={index} />);
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
      {productCmponents}
      <div className="row"></div>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="st-pagination">
            <ul className="pagination">
              <li>
                <a href="#" aria-label="previous">
                  <span aria-hidden="true">Previous</span>
                </a>
              </li>
              <li className="active">
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#" aria-label="Next">
                  <span aria-hidden="true">Next</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
