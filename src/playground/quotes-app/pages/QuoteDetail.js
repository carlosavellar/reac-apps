import { Fragment } from "react";
import { useParams, Route } from "react-router-dom";
const DUMMY_QUOTES = [
  { id: "q1", author: "Michael O'Brain", text: "Its amazing being alive" },
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

  return (
    <Fragment>
      <div>Detail: {params.quoteId}</div>
      <Route path={`/quotes/${params.quoteId}`}>{selectedQuote.text}</Route>
    </Fragment>
  );
};

export default QuoteDetail;
