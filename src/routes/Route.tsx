import { ComponentType } from "react"
import {Redirect, Route as ReactRoute, RouteProps} from "react-router-dom"
import {useUserContext} from "../providers/UserContext/index"


interface Props extends RouteProps{
    isPrivate?: boolean
    component: ComponentType
}


export const Route = ({isPrivate= false, component: Component, ...rest }: Props) => {

    const {token} = useUserContext()

    return (
        <ReactRoute {...rest} render={() => 
            isPrivate === !!token ? 
            <Component/> :
            <Redirect to={isPrivate ? "/" : "/dashboard"}/>   
        }
        /> 
    )
}
