import { useEffect } from "react";
import useHttp from "../../hooks/use-http";
import { getAllQuotes } from "../../lib/api";
import QuoteList from "../quotes/QuoteList";
import LoadingSpinner from "../UI/LoadingSpinner";
import NoQuotesFound from "../quotes/NoQuotesFound";

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    // 이 컴포넌트가 렌더링 될때마다 Get함수가 실행됨
    sendRequest();
  }, [sendRequest]);

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

  // quote가 하나도 없을 경우
  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />;
  }

  return <QuoteList quotes={loadedQuotes} />;
};

export default AllQuotes;
