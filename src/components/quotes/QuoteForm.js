import { useRef, useState } from "react";
import { Prompt } from "react-router-dom";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  const [isEntered, setIsEntering] = useState(false);
  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const finishEnteringHandler = () => {
    // form 작성을 완료하여 이 페이지를 나갈 경우
    // submit handler에 작성하는 것은 이미 늦음.
    // 버튼에 상태 변경 로직을 작성해야 양식 제출 전 트리거가 된다!
    // 동기식으로 실행되기 때문
    setIsEntering(false);
  };
  const formFocusedHandler = () => {
    /* Prompt : 렌더링할 수 있는 컴포넌트로 사용자가 다른곳으로 이동할 때 자동으로 감시한다.
    -  그리고 특정 조건이 충족되면 떠나기전 경고를 표시해준다
    - prop
      - when : 사용자가 URL을 변경하는 경우 이 프롬프트가 표시되어야 하는지 여부를 찾기위해 true/false를 전달한다.
      - message: 사용자가 나가려고할 때 보여주고 싶은 메세지를 반환하는 함수를 설정한다.
    */
    setIsEntering(true);
  };

  return (
    <>
      {/* <Prompt
        when={isEntered}
        message={(location) =>
          "정말로 페이지를 나가시겠습니까? 이 페이지를 나갈 경우 작성한 데이터가 사라집니다."
        }
      /> */}
      <Card>
        <form
          onFocus={formFocusedHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions} onClick={finishEnteringHandler}>
            <button className="btn">Add Quote</button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;
