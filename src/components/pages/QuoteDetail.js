import { Route, useParams } from "react-router-dom";
import HighlightedQuote from "../quotes/HighlightedQuote";

import Comments from "../comments/Comments";

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

const QuoteDetail = () => {
  const params = useParams();
  const quote = DUMMY_QUOTES.find((qute) => qute.id === params.quoteId);

  if (!quote) {
    //  404에러 처리!! quote가 없을 경우 redirect
    return <p>no qoute found</p>;
  }

  return (
    <section>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </section>
  );
};

export default QuoteDetail;
