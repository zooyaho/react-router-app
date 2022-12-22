import QuoteList from "../quotes/QuoteList";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Max",
    text: "apple dkslfj kdsl",
  },
  {
    id: "q2",
    author: "Lengen",
    text: "graph dkslfj kdsl",
  },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
