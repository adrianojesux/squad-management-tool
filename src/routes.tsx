import React, { Suspense, lazy } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import GlobalStyles from "./styles/globalStyles";

import Loading from "./components/Loading";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));

export default function () {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route path="" component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
}
