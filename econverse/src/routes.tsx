import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";

export function Routes() {
  return (
    <BrowserRouter>
      <Layout>
          <Switch>
            <Route path="/" element={<Home />} />
          </Switch>
      </Layout>
    </BrowserRouter>
  );
}
