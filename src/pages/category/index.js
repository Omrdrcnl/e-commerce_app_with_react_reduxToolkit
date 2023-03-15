import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../compenents/breadcrumb";
import SideBarSearch from "../../compenents/sideBarSearch";
import ProductList from "./components/product-list";
import useApi from "../../hooks/useApi";

function Category() {
  const params = useParams();
  const api = useApi();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const urlQueryData = {};
    urlQueryData["productTaxons.taxon.code"] = params.taxon_code;
    urlQueryData["order[code]"] = "asc";
    urlQueryData["order[createdAt]"] = "asc";

    // console.log(">>> urlQueryData", urlQueryData);

    api
      .get("shop/products", { params: urlQueryData })
      .then((res) => {
        console.log(">>  PRODUCT DATA", res.data);
        setProducts(res.data);
      })
      .catch((err) => { });
  }, []);

  const breadcrumbs = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Category",
      href: "/category",
    },
    {
      title: params.taxon_code,
      href: "/category/" + params.taxon_code,
    },
  ];
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <div className="content">
        <div className="container">
          <div className="row">
            <SideBarSearch />
            <ProductList item={products} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
