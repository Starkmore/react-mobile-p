import React, { Suspense } from "react";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import FooterBar from "./../components/FooterBar/index.js";
import Loading from "./../components/Loading/index.jsx";

import RouterList from "./routes";
import Home from "./../views/home/index.js";
const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <React.Fragment>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <RouterList />
          <FooterBar />
        </React.Fragment>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
