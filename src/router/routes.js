import React, {
    lazy
  } from "react";
  import {
    Route
  } from "react-router-dom";
  
  const RouterLis = [{
    component: lazy(() =>
      import ("./../views/home/index.js")),
    path: "/"
  }, {
    component: lazy(() =>
      import ("./../views/home/index.js")),
    path: "/home"
  }, {
    component: lazy(() =>
      import ("./../views/ranking/index.js")),
    path: "/my"
  }, {
    component: lazy(() =>
      import ("./../views/detail/index.js")),
    path: "/works"
  }, {
    component: lazy(() =>
      import ("./../views/home/indexDetail.js")),
    path: "/indexDetail"
  }];
  
  const RouterList = () => (
    RouterLis.map((item, key) => {
      return <Route key={key} exact path={item.path} component={item.component}/>;
    })
  );
  
  export default RouterList;