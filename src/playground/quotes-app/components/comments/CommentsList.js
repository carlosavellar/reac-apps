import { Fragment } from "react";

import CommentItem from "./CommentItem";
import classes from "./CommentsList.module.css";

const CommentsList = (props) => {
  return (
    <Fragment>
      <ul className={classes.comments}>
        {props.comments.map((comment) => (
          <CommentItem key={comment.id} {...comment} />
        ))}
      </ul>
    </Fragment>
  );
};

export default CommentsList;
