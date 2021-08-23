import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./playground/meals-app/src/components/App";
import reportWebVitals from "./reportWebVitals";
import CartContext from "./playground/meals-app/src/store/cart-context";
ReactDOM.render(
  <CartContext.Provider>
    <App />
  </CartContext.Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
