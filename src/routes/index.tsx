import {Switch, Route} from "react-router-dom"

import Login from "../pages/Login/index"
import Signup from "../pages/Signup/index"
import Dashboard from "../pages/Dashboard/index"

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/dashboard" component={Dashboard}/>
        </Switch>
    )
}

export default Routes