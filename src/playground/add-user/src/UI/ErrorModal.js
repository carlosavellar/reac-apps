import classes from "./ErrorModal.module.css";
import Button from "./Button";
import Card from "./Card";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onSetError}>
        <Card className={classes.modal}>
          <header className={classes.header}>{props.title}</header>
          <div className={classes.content}>{props.message}</div>
          <footer className={classes.actions}>
            <Button onClick={props.onSetError}>Okay</Button>
          </footer>
        </Card>
      </div>
    </div>
  );
};

export default ErrorModal;
