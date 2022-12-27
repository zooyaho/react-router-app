import { Fragment } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      // 오름차순
      console.log("오름차순");
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search); // JS의 기본 생성자 함수, key와 value를 갖는 객체를 생성한다.
  const isSortingAscending = queryParams.get("sort") === "asc"; // key를 사용하여 해당 값을 가져옴.

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  const changeSortingHandler = () => {
    // history객체는 URL을 바꿀 수 있게 하며,
    // location객체는 최근 로드된 페이지와 URL에 대한 정보가 있음. -> search속성에서 쿼리매개변수를 확인할 수 있음
    navigate(location.pathname, {
      search: `?sort=${isSortingAscending ? "desc" : "asc"}`,
    });
    // history.push(); // 페이지 컴포넌트는 재평가가 됨

    // search(쿼리매개변수)가 복잡해질 경우 해당 객체를 사용하면 가독성이 좋아짐.
    /*
    history.push({
      pathname: location.pathname,
      search: `?sort=${isSortingAscending ? "desc" : "asc"}`,
    });
    */
  };
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
