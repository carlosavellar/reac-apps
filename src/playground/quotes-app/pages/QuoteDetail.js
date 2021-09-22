import React, { Fragment } from "react";
import { useParams, Route, Link } from "react-router-dom";
import HighlightedQuote from "./../components/quotes/HighlightedQuote";
import Comments from "./../components/comments/Comments";
import "./../index.css";
// import classes from "./../components/classes";

const DUMMY_QUOTES = [
  { id: "q1", author: "Michael O'Brain", text: "Amazing being alive" },
  {
    id: "q2",
    author: "Mirella Polish Crazie",
    text: "Is the world being destroyed",
  },
];

const QuoteDetail = (props) => {
  const params = useParams();
  const selectedQuote = DUMMY_QUOTES.find(
    (quote) => quote.id === params.quoteId
  );

  if (!selectedQuote) {
    return <p>Nop fucking quote</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote
        text={selectedQuote.text}
        author={selectedQuote.author}
        id={selectedQuote.id}
      />
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className="centered">
          <Link
            className="btn--flat"
            to={`/quotes/${selectedQuote.id}/comments`}
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
