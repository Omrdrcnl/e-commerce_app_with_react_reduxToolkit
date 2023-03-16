function Breadcrumb(props) {
  return (
    <div className="page-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="page-breadcrumb">
              <ol className="breadcrumb">
                <li>
                  {props.items.map((item, index) =>
                    <a href={item.href} key={index} >{item.title} </a>
                  )}
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
