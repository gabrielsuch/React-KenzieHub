import {ReactNode} from "react"

import {DashboardContextProvider} from "./DashboardContext/index"
import {AuthProvider} from "./AuthContext/index"
import {TechProvider} from "./TechContext/index"


interface ChildrenProps {
    children: ReactNode
}


export const Providers = ({children}: ChildrenProps) => {
    return (
        <DashboardContextProvider>
            <AuthProvider>
                <TechProvider>
                    {children}
                </TechProvider>
            </AuthProvider>
        </DashboardContextProvider>
    )
}