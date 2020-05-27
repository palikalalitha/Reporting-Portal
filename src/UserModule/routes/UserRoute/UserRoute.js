import React from "react"
import { withRouter } from "react-router-dom"
import { observer, inject } from "mobx-react"
import { UserPage } from "../../components/UserPage/UserPage"
@observer
class UserRoute extends React.Component {
    componentDidMount() {
    }
    render() { return(
          <UserPage/>
        )
    }
}
export default withRouter(UserRoute)
