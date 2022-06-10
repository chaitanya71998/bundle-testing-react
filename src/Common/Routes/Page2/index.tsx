import "video.js"
import "react-select"
import "@material-ui/core"
import "@material-ui/icons"
import "@material-ui/lab"
import "@material-ui/utils"

import firebase from "firebase"
import React from "react"
import { Button } from "@material-ui/core"
import { RouteComponentProps, withRouter } from "react-router-dom"

interface Props extends RouteComponentProps {}

class Page2 extends React.Component<Props> {
  onClickGoBack = () => {
    this.props.history.goBack()
  }
  render() {
    return <Button onClick={this.onClickGoBack}> Go back</Button>
  }
}

export default withRouter(Page2)
