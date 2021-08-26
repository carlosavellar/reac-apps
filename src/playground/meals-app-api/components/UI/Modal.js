import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => (
  <div className={classes.backdrop} onClick={props.onClose}></div>
);

const Overlay = (props) => (
  <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
  </div>
);
const backdrop = document.getElementById("backdrop");
const overlay = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onCloseModal} />,
        backdrop
      )}
      {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, overlay)}
    </Fragment>
  );
};

export default Modal;
