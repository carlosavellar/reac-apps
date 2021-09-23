import { useEffect } from "react";
import { useRef } from "react";
import LoadingSpinner from "./../UI/LoadingSpinner"
import useHttp from "./../../hooks/use-http";
import { addComment } from "./../../lib/api"
import classes from "./NewCommentForm.module.css";

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const authorTextRef = useRef();

  const { sendRequest, status, error  } = useHttp(addComment);

  const { onAddComment } = props;

  useEffect(()=>{
    if(status === 'complete' && !error){
      onAddComment()
    }
  },[onAddComment, status, error])


  const submitFormHandler = (event) => {
    event.preventDefault();
   
    const enteredText = commentTextRef.current.value;

    // optional: Could validate here

    // send comment to server
    sendRequest(({ requestData: {text: enteredText},id: props.quoteId}));

  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === "pending" && <div className="centered"><LoadingSpinner /></div>}
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
