import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { addQuote } from "../../lib/api";

import QuoteForm from "../quotes/QuoteForm";

const NewQuote = () => {
  // 브라우저 기록을 변경시킬 수 있음, 페이지 stack에 쌓임
  // push(): back버튼을 사용하여 이전 페이지로 이동가능 -> 새 페이지 추가와 같음
  // replace(): back버튼을 사용하여 이전 페이지로 이동할 수 없음!! -> redirection과 같음
  const navigate = useNavigate();
  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === "completed") {
      navigate("/quotes");
    }
  }, [status, navigate]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };

  return (
    <QuoteForm
      isLoading={status === "pending" ? true : false}
      onAddQuote={addQuoteHandler}
    />
  );
};

export default NewQuote;
