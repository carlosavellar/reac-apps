import React from "react";

export default React.createContext({
  item: [],
  totalAmount: "",
  addItem: (item) => {},
  removeItem: (id) => {},
});

// import React, { useState, useEffect } from "react";

// export default React.createContext({
//   isCartShow: false,
//   onShowCart: () => {},
//   onCloseCart: () => {},
// });

// export const CartContextProvider = (props) => {
//   const [isCartShown, setIsCartShown] = useState(false);

//   const cartStateShow = isCartShown;

//   const closeCartHandler = () => {
//     setIsCartShown(false);
//   };

//   const showCartHandler = () => {
//     debugger;
//     setIsCartShown(true);
//   };

//   useEffect(() => {
//     if (isCartShown === cartStateShow) console.log(isCartShown);
//   }, [isCartShown, cartStateShow]);

//   return (
//     <CartContext.Provider
//       value={{
//         onShowCart: showCartHandler,
//         onClose: closeCartHandler,
//         isCartShown: isCartShown,
//       }}
//     >
//       {props.children}
//     </CartContext.Provider>
//   );
// };
