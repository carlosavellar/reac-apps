import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import useHttp from "./../../hooks/use-http";
import { getAllComments } from "./../../lib/api"
import LoadingSpinner from "./../UI/LoadingSpinner";
import CommentsList from "./CommentsList";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();
  
  const { quoteId } = params;
  
  const { sendRequest, status, data: allComments} = useHttp(getAllComments);
  
  const onAddCommentHandler = useCallback(() =>{
    sendRequest(quoteId);
  }, [quoteId, sendRequest])
  
  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  
  useEffect(()=>{
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  let comments;

  if(status === "pending"){
    comments = <div className="centered"><LoadingSpinner /></div>
  }
  
  if(status === "complete" && !allComments && allComments.length > 0){
    comments = <CommentsList comments={allComments} />
  }
  
  if(allComments === null){
    comments = <div>No fucking comments eeewwwwwww</div>
  }
  console.log(allComments);


  return (
    <section className={classes.comments}>
      <h2>User Comments {params.quoteId}</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm quoteId={quoteId} onAddComment={onAddCommentHandler} />}
      {comments}
    </section>
  );
};

export default Comments;
