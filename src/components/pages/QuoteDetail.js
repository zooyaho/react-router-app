import { Link, Outlet, Route, Routes, useParams } from "react-router-dom";
import HighlightedQuote from "../quotes/HighlightedQuote";
import LoadingSpinner from "../UI/LoadingSpinner";

import Comments from "../comments/Comments";
import useHttp from "../../hooks/use-http";
import { getSingleQuote } from "../../lib/api";
import { useEffect } from "react";

const QuoteDetail = () => {
  // const match = useRouteMatch();
  const params = useParams();
  const {
    sendRequest,
    data: loadedQuote,
    status,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(params.quoteId);
  }, [params.quoteId, sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (status === "error") {
    return <p className="centered focused">{error}</p>;
  }
  if (status === "completed" && !loadedQuote.text) {
    //  loadedQuote는 항상 있기 때문에 text를 검사해야함. 404에러 처리!!
    return <p>no qoute found</p>;
  }

  return (
    <section>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      {/* 네스트 라우터 활용~! */}
      {/* match.path: placeholder url를 사용하여 동적 라우팅 (ex. quotes/:qouteId)*/}
      {/* match.url: 현재 url정보를 가지고 있음 (ex. quotes/q1)*/}
      <Outlet />
    </section>
  );
};

export default QuoteDetail;
