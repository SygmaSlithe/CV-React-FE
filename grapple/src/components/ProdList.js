import React from "react";
import Product from "./Prod.js";

export default function ProdList(props) {
  return props.prodList.length > 0 ? ( //conditional rendering
    props.prodList.map((prod, i) => {
      return (
        <Product
          prod={prod}
          key={i}
          incQ={props.incQ}
          decrementQ={props.decreQ}
          index={i}
          remItem={props.remItem}
          addItem = {props.addItem}
        />
      );
    })
  ) : (
    <h1>No Products found</h1>
  );
}
