import classes from "./CommentItem.module.css";

const CommentItem = (props) => {
  debugger;
  return (
    <li className={classes.item}>
      <p>{props.text}</p>
      <p>{props.author}</p>
      <button>Teste</button>
    </li>
  );
};

export default CommentItem;
