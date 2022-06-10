import "video.js"
import firebase from "firebase/auth"
import { History } from "history"
import React from "react"
import { Button } from "@material-ui/core"
import { RouteComponentProps, withRouter } from "react-router-dom"
interface Props extends RouteComponentProps {
  history: History
}

class Home extends React.Component<Props> {
  onClickPage1 = () => {
    const { history } = this.props
    history.push("/page1")
  }

  onClickPage2 = () => {
    const { history } = this.props
    history.push("/page2")
  }

  render() {
    return (
      <>
        <h2>Home</h2>
        <Button onClick={this.onClickPage1}>Page 1</Button>
        <br />
        <br />
        <Button onClick={this.onClickPage2}>Page 2</Button>
      </>
    )
  }
}

export default withRouter(Home)
