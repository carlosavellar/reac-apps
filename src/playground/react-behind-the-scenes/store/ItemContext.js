import { Fragment } from "react";
import ItemContext from "./item-context";

const ContextProvider = (props) => {
  const itemContextArr = {
    items: [],
  };

  return (
    <Fragment>
      <div>we - </div>;
      <ItemContext value={itemContextArr}>{props.children}</ItemContext>
    </Fragment>
  );
};

export default ContextProvider;
