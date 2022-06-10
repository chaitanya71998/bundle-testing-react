import React, { lazy } from "react"
import { Route } from "react-router-dom"

const Page1 = lazy(() => import("./Page1" /* webpackChunkName: "Page1" */))
const Page2 = lazy(() => import("./Page2" /* webpackChunkName: "Page2" */))
const Home = lazy(() => import("./Home" /* webpackChunkName: "Home" */))

const routes = [
  <Route exact path={"/page1"} key={"page1"} component={Page1} />,
  <Route exact path={"/page2"} key={"page2"} component={Page2} />,
  <Route exact path={"/"} key={"home"} component={Home} />,
]

export default routes
