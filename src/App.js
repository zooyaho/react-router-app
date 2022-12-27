import { Link, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotes from "./components/pages/AllQuotes";
import NewQuote from "./components/pages/NewQuote";
import NotFound from "./components/pages/NotFound";
import QuoteDetail from "./components/pages/QuoteDetail";
import Comments from "./components/comments/Comments";

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
