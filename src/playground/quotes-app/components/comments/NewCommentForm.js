import { useRef } from "react";

import classes from "./NewCommentForm.module.css";

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const authorTextRef = useRef();

  const submitFormHandler = (event) => {
    const commentValue = commentTextRef.current.value;
    const authorValue = authorTextRef.current.value;
    event.preventDefault();
    props.onAddQuote({
      id: Math.random() * (3.0).toString(),
      author: authorValue,
      text: commentValue,
    });
    // optional: Could validate here

    // send comment to server
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Author</label>
        <input type="text" ref={authorTextRef} />
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button type="submit" className="btn">
          Add Comment
        </button>
      </div>
    </form>
  );
};

export default NewCommentForm;
