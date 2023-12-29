import {ReactNode} from "react"

import {DashboardContextProvider} from "./DashboardContext/index"
import {UserContextProvider} from "./UserContext/index"
import {TechContextProvider} from "./TechContext/index"


interface ChildrenProps {
    children: ReactNode
}


export const Providers = ({children}: ChildrenProps) => {
    return (
        <DashboardContextProvider>
            <UserContextProvider>
                <TechContextProvider>
                    {children}
                </TechContextProvider>
            </UserContextProvider>
        </DashboardContextProvider>
    )
}