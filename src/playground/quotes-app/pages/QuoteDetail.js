import React, { Fragment, useEffect } from "react";
import useHttp from "./../hooks/use-http";
import LoadingSpinner from "./../components/UI/LoadingSpinner"
import {getSingleQuote} from "./../lib/api"
import NoQuotesFound from "./../components/quotes/NoQuotesFound"

import { useParams, Route, Link } from "react-router-dom";
import HighlightedQuote from "./../components/quotes/HighlightedQuote";
import Comments from "./../components/comments/Comments";
import "./../index.css";
// import classes from "./../components/classes";


const QuoteDetail = (props) => {
  const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote,  true);

  const params = useParams();

  const {quoteId} = params;

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);



  if(status === 'pending'){
    return (
    <div className="centered">
      <LoadingSpinner />
    </div>)
  }

  if(error){
    return <p className="centered focused">{error.message}</p>
  }
  
  if(status === 'complete' && (!loadedQuote)){
    return <NoQuotesFound />
  }

  // const selectedQuote = loadedQuotes.find(
  //   (quote) => quote.id === params.quoteId
  // );

  
  if (!loadedQuote) {
    return <p>Nop fucking quote</p>;
  }


  return (
    <Fragment>
      <HighlightedQuote
        text={loadedQuote.text}
        author={loadedQuote.author}
        id={loadedQuote.id}
      />
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className="centered">
          <Link
            className="btn--flat"
            to={`/quotes/${loadedQuote.id}/comments`}
          >
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
