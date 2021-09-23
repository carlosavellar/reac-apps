import {useEffect } from "react"
import  useHttp from "./../hooks/use-http";
import LoadingSpinner from "./../components/UI/LoadingSpinner"
import { getAllQuotes } from "./../lib/api";
import NoQuotesFound from "./../components/quotes/NoQuotesFound";

import QuoteList from "./../components/quotes/QuoteList";


const AllQuotes = (props) => {
  const {sendRequest, status, data: loadedQuotes, error} = useHttp(getAllQuotes, true);
  
  useEffect(() => {
    sendRequest()
  }, [sendRequest])
  
  if(status === 'pending'){
    return (
    <div className="centered">
      <LoadingSpinner />
    </div>)
  }

  if(error){
    return <p className="centered focused">{error.message}</p>
  }
  
  if(status === 'complete' && (!loadedQuotes || loadedQuotes.length === 0)){
    return <NoQuotesFound />
  }

  return <QuoteList quotes={loadedQuotes} />;
};

export default AllQuotes;
