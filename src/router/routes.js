import React, { lazy } from "react";
import { Route } from "react-router-dom";

// 路由部分
import Home from "./../views/home/index.js";
import Ranking from "./../views/ranking/index.js";
import Detail from './../views/detail/index.js'
import IndexDetail from './../views/home/indexDetail.js'
const Routers = [
  {
    // component: lazy(() => import("./../views/home/index.js")),
    // component: resolve => require(["./../views/home/index.js"], resolve),
    component: Home,
    path: "/"
  },
  {
    component: Home,
    path: "/home"
  },
  {
    component: Ranking,
    path: "/my"
  },
  {
    component: Detail,
    path: "/works"
  },
  {
    component: IndexDetail,
    path: "/indexDetail"
  }
];

const RouterList = () =>
  Routers.map((item, key) => {
    return <Route key={key} exact path={item.path} component={item.component} />;
  });

export default RouterList;
