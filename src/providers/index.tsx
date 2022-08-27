import {AuthProvider} from "./AuthContext/index"
import {TechProvider} from "./TechContext/index"
import {ReactNode} from "react"

interface ChildrenProps {
    children: ReactNode
}

export const Providers = ({children}: ChildrenProps) => {
    return (
        <AuthProvider>
            <TechProvider>
                {children}
            </TechProvider>
        </AuthProvider>
    )
}