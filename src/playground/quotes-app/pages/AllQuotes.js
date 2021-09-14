import CommentsList from "./../components/comments/CommentsList";
const DUMMY_QUOTES = [
  { id: "q1", author: "Michael O'Brain", text: "Its amazing being alive" },
  {
    id: "q2",
    author: "Mirella Polish Crazie",
    text: "Is the world being destroyed",
  },
];

const AllQuotes = (props) => {
  return <CommentsList comments={DUMMY_QUOTES} />;
};

export default AllQuotes;
