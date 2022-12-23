import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
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
    //  404에러 처리!!
    return <p>no qoute found</p>;
  }
  // useRouteMatch

  return (
    <section>
      <HighlightedQuote text={quote.text} author={quote.author} />
      {/* 네스트 라우터 활용~! */}
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </section>
  );
};

export default QuoteDetail;
