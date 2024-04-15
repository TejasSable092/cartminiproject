import React, { useState } from "react";
import Data from "./Data/data";
import "./Cart.css";

const Cart = () => {
  const [productItem, setProductItem] = useState(Data);
  const [addto, setAddto] = useState(0);

  const Filter = () => {
    const filteredCarts = productItem.filter((cart) => cart.price > 80);
    setProductItem(filteredCarts);
  };

  const incrementAddTo = () => {
    if (addto < 25) {
      setAddto(addto + 1);
    }
  };

  const decrementAddTo = () => {
    if (addto > 0) {
      setAddto(addto - 1);
    }
  };

  return (
    <div>
      <button className="Filter" onClick={Filter}>
        Filter by Price
      </button>

      <div className="cart">
        {productItem.map((product) => (
          <div className="CartContainer" key={product.id}>
            <div className="Cart-Img">
              <img src={product.thumbnail} alt={product.title} />
            </div>

            <div className="Cart-title">
              <p>{product.title}</p>
              <p> Discount: {product.discountPercentage}</p>
            </div>

            <div className="Addtocart">
              <button onClick={incrementAddTo}>+</button>
              {addto}
              <button onClick={decrementAddTo}>-</button>
            </div>

            <div className="cart-btn">
              <button type="button">Buy AT {product.price}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
