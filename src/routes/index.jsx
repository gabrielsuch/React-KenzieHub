import {Route, Switch} from "react-router-dom"
import SignUp from "../pages/SignUp/index"
import Login from "../pages/Login/index"
import DashBoard from "../pages/DashBoard/index"
import {useEffect, useState} from "react"

const Routes = () => {

    const [auth, setAuth] = useState(false)
    const [data, setData] = useState("")

    // useEffect(() => {
    //     const token = JSON.parse(localStorage.getItem("@KenzieHub:token"))

    //     if(token)
    //     {
    //         return setAuth(true)
    //     }
    // }, [auth])

    return (
        <Switch>
            <Route exact path="/">
                <SignUp auth={auth} setAuth={setAuth}/>
            </Route>
            <Route path="/login">
                <Login auth={auth} setAuth={setAuth} data={data} setData={setData}/>
            </Route>
            <Route path="/dashboard">
                <DashBoard auth={auth} setAuth={setAuth} data={data} setData={setData}/>
            </Route>
        </Switch>
    )
}

export default Routes