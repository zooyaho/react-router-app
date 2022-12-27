import React, { Suspense } from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
// 대부분의 사용자가 AllQuotes페이지를 방문할 것이라고 생각된다면, 로딩을 지연시키는 것은 불필요하다.
import AllQuotes from "./components/pages/AllQuotes";
// import NewQuote from "./components/pages/NewQuote";
// import NotFound from "./components/pages/NotFound";
// import QuoteDetail from "./components/pages/QuoteDetail";
import Comments from "./components/comments/Comments";
import LoadingSpinner from "./components/UI/LoadingSpinner";

// 코드를 미리 다운로드하기 위해 미리 실행하지 않고, 필요할때만 실행한다!
const NewQuote = React.lazy(() => import("./components/pages/NewQuote"));
const QuoteDetail = React.lazy(() => import("./components/pages/QuoteDetail"));
const NotFound = React.lazy(() => import("./components/pages/NotFound"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" replace element={<Navigate to="/quotes" />} />
          <Route path="/quotes" element={<AllQuotes />} />
          <Route path="/quotes/:quoteId" element={<QuoteDetail />}>
            <Route
              path=""
              element={
                <div className="centered">
                  <Link className="btn--flat" to="comments">
                    Load Comments
                  </Link>
                </div>
              }
            />
            <Route path="comments" element={<Comments />} />
          </Route>
          <Route path="new-quote" element={<NewQuote />} />
          {/* *(와일드 문자): 모든 경로를 뜻함, 맨 아래에 작성하여 위 라우트 경로와 일치하지 않은 모든 경로에 해당 컴포넌트가 렌더링 됨!  */}
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
