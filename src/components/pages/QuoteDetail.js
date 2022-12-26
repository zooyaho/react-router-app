import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import HighlightedQuote from "../quotes/HighlightedQuote";

import Comments from "../comments/Comments";

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
  {
    id: "q3",
    author: "Lengun",
    text: "I'm fine thank you",
  },
];

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();
  const quote = DUMMY_QUOTES.find((qute) => qute.id === params.quoteId);

  if (!quote) {
    //  404에러 처리!!
    return <p>no qoute found</p>;
  }

  return (
    <section>
      <HighlightedQuote text={quote.text} author={quote.author} />
      {/* 네스트 라우터 활용~! */}
      {/* match.path: placeholder url를 사용하여 동적 라우팅 (ex. quotes/:qouteId)*/}
      {/* match.url: 현재 url정보를 가지고 있음 (ex. quotes/q1)*/}
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </section>
  );
};

export default QuoteDetail;
