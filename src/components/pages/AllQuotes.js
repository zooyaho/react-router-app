import QuoteList from "../quotes/QuoteList";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Max",
    text: "hi dkslfj kdsl",
  },
  {
    id: "q2",
    author: "Lengen",
    text: "hello dkslfj kdsl",
  },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
