import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Products() {
  const navigate = useNavigate();

  // const redirectHandler = () => {
  //   navigate("/welcome", {replace:true})
  //   navigate(1)
  //   navigate(-1)
  // }

  return (
    <section>
      <h1>Products</h1>
      <ul>
        <li>
          <Link to="/products/book">A Book</Link>
        </li>
        <li>
          <Link to="/products/keyboard">A Keyboard</Link>
        </li>
        <li>
          <Link to="/products/lamp">A Lamp</Link>
        </li>
      </ul>
    </section>
  );
}

export default Products;
