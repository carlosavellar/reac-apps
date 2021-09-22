import QuoteForm from "./../components/quotes/QuoteForm";
import useHttp from "./../hooks/use-http";

const NewQuote = (props) => {
  const addNewQuoteHandler = (newQuotes) => {
    console.log(newQuotes);
  };

  return (
    <div>
      <h1>New quote</h1>
      <QuoteForm onAddQuote={addNewQuoteHandler} />
    </div>
  );
};

export default NewQuote;
