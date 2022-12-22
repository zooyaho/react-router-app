import { useHistory } from "react-router-dom";

import QuoteForm from "../quotes/QuoteForm";

const NewQuote = () => {
  // 브라우저 기록을 변경시킬 수 있음, 페이지 stack에 쌓임
  // push(): back버튼을 사용하여 이전 페이지로 이동가능 -> 새 페이지 추가와 같음
  // replace(): back버튼을 사용하여 이전 페이지로 이동할 수 없음!! -> redirection과 같음
  const history = useHistory();

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    history.replace("/quotes");
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
