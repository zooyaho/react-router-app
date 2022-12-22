import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotes from "./components/pages/AllQuotes";
import NewQuote from "./components/pages/NewQuote";
import NotFound from "./components/pages/NotFound";
import QuoteDetail from "./components/pages/QuoteDetail";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
        {/* *(와일드 문자): 모든 경로를 뜻함, 맨 아래에 작성하여 위 라우트 경로와 일치하지 않은 모든 경로에 해당 컴포넌트가 렌더링 됨!  */}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
