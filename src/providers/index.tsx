import {AuthProvider} from "./AuthContext/index"
import {ReactNode} from "react"

interface ChildrenProps {
    children: ReactNode
}

export const Providers = ({children}: ChildrenProps) => {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}