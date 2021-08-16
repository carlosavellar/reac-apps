import React from "react";
import ReactDOM from "react-dom";
import classes from "./ErrorModal.module.css";
import Button from "./Button";
import Card from "./Card";

const ModalContent = (props) => (
  <Card className={classes.modal}>
    <header className={classes.header}>{props.title}</header>
    <div className={classes.content}>{props.message}</div>
    <footer className={classes.actions}>
      <Button onClick={props.onSetError}>Okay</Button>
    </footer>
  </Card>
);

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onSetError} />;
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onSetError={props.onSetError} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalContent
          title={props.title}
          message={props.message}
          onSetError={props.onSetError}
          actions={props.actions}
        />,
        document.getElementById("modal-error-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
