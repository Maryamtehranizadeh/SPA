import React from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Product() {
  
  const params = useParams();
  return (
    <div>
      <NavBar />
      <h2>Details of This Product {params.id}</h2>
    </div>
  );
}

export default Product;
