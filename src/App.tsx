import React, { Suspense } from "react"
import logo from "./logo.svg"
import "./App.css"
import routes from "./Common/Routes"
import { Router, Switch, withRouter } from "react-router-dom"
import { createBrowserHistory } from "history"

const history = createBrowserHistory()

function App() {
  return (
    <>
      <Router history={history}>
        <Suspense fallback={<>Loading....</>}>
          <Switch>{routes}</Switch>
        </Suspense>
      </Router>
    </>
  )
}

export default App
