import {
  useParams,
  BrowserRouter as Router,
  Route,
  NavLink,
} from "react-router-dom";

const Products = (props) => {
  return (
    <section>
      <h1>Products</h1>
      {/* <Router> */}
      {/* <Route> */}
      <NavLink to={`${props.match.path}/productDetail/:productId`}>
        Detail
      </NavLink>
      {/* </Route> */}
      {/* </Router> */}
      <p>Text</p>
    </section>
  );
};

export default Products;
