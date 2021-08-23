import ReactDOM from "react-dom";

import "./index.css";
import App from "./src/components/App";
import { CartContextProvider } from "./src/store/CartContext";

ReactDOM.render(
  <CartContextProvider>
    <App />
  </CartContextProvider>,
  document.getElementById("root")
);
