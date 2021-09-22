import QuoteList from "./../components/quotes/QuoteList";
const DUMMY_QUOTES = [
  { id: "q1", author: "Michael O'Brain", text: "Amazing being alive" },
  {
    id: "q2",
    author: "Mirella Polish Crazie",
    text: "Is the world being destroyed",
  },
];

const AllQuotes = (props) => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
