import React from "react";
import NavBar from "../components/NavBar";
import { Link, useSearchParams, useNavigate } from "react-router-dom";

const ProductItems = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
  { id: 4, name: "Product 4" },
];

export { ProductItems };

function Products() {
  const navigate = useNavigate();
  console.log(navigate);
  const [searchParams, setSearchParams] = useSearchParams();

  //   console.log(searchParams.toString());
  const sortBy = searchParams.get("sortBy");
  const order = searchParams.get("order");
  //   console.log({ sortBy, order });
  const searchHandler = () => {
    setSearchParams({ order: "asc", sortBy: "sale" });
  };
  const homeHandler = () => {
    navigate("/");
  };
  return (
    <div>
      <NavBar />
      <ul>
        {ProductItems.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      <button onClick={searchHandler}>Sort</button>
      <hr />
      <button onClick={homeHandler}>Go Home</button>
    </div>
  );
}

export default Products;
