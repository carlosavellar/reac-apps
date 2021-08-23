import ReactDOM from "react-dom";
import { Fragment } from "react";

import classes from "./Modal.module.css";

const BackDrop = (props) => <div className={classes.backdrop} />;

const ModalOverlay = (props) => (
  <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
  </div>
);

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlay")
      )}

      {ReactDOM.createPortal(
        <BackDrop onClick={props.opnClose} />,
        document.getElementById("backdrop")
      )}
    </Fragment>
  );
};

export default Modal;
