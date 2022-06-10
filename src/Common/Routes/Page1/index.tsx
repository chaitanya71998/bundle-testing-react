import "ace-builds"
import "aws-sdk"
import "react-select"
import "@material-ui/core"
import "@material-ui/icons"
import "@material-ui/lab"
import "@material-ui/utils"
import "sql-formatter-plus"
import firebase from "firebase/auth"
import firebaseDatabase from "firebase/database"

import React from "react"
import ace from "react-ace"
import { Button } from "@material-ui/core"
import { RouteComponentProps, withRouter } from "react-router-dom"

interface Props extends RouteComponentProps {}

class Page1 extends React.Component<Props> {
  onClickGoBack = () => {
    this.props.history.goBack()
  }
  render() {
    return <Button onClick={this.onClickGoBack}> Go back</Button>
  }
}

export default withRouter(Page1)
