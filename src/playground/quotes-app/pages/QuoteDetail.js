import { Fragment } from "react";
import { useParams, Route } from "react-router-dom";
import Comments from "./../components/comments/Comments";

const QuoteDetail = (props) => {
  const params = useParams();

  return (
    <Fragment>
      <div>Detail: {params.quoteId}</div>
      <Route path={`/quotes/${params.quoteId}/comments`} component={Comments} />
    </Fragment>
  );
};

export default QuoteDetail;
