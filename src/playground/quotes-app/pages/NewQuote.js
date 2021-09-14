import NewCommentForm from "./../components/comments/NewCommentForm";

const NewQuote = (props) => {
  const addNewQuoteHandler = (newQuotes) => {
    console.log(newQuotes);
  };

  return (
    <div>
      <h1>New quote</h1>
      <NewCommentForm onAddQuote={addNewQuoteHandler} />
    </div>
  );
};

export default NewQuote;
