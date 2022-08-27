import {createContext, useContext, ReactNode, useState} from "react"
import {useHistory} from "react-router-dom"

import api from "../../services/api"

interface ChildrenProps {
    children: ReactNode
}

interface RegisterProps {
    name: string
    email: string
    password: string
    confirm_password: string
    course_module: string
    bio: string
    contact: string
}

interface LoginProps {
    email: string
    password: string
}

interface DataProps {
    token: string
    user: UserProps
}

interface UserProps {
    avatar_url: string
    bio: string
    contact: string
    course_module: string
    created_at: string
    email: string
    id: string
    name: string
    techs: []
    updated_at: string
    works: []
}

interface ContextData {
    createRegister: (data: RegisterProps) => void
    login: (data: LoginProps) => void
    token: string
    user: UserProps
    logout: () => void
}

const AuthContext = createContext<ContextData>({} as ContextData)

export const AuthProvider = ({children}: ChildrenProps) => {
    
    const history = useHistory()

    const [data, setData] = useState<DataProps>(() => {
        const token = localStorage.getItem("@KenzieHub:token")
        const user = localStorage.getItem("@KenzieHub:user")

        if(token && user){
            return {
                token,
                user: JSON.parse(user)
            }
        }

        return {} as DataProps
    })

    const createRegister = (data: RegisterProps) => {
        const {confirm_password, ...newData} = data
        
        api.post("/users", newData)
        .then((_) => {
            history.push("/")
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const login = (data: LoginProps) => {
        api.post("/sessions", data)
        .then((response) => {
            const token = response.data.token
            const user = response.data.user

            localStorage.setItem("@KenzieHub:token", token)
            localStorage.setItem("@KenzieHub:user", JSON.stringify(user))

            setData({token, user})
            history.push("/dashboard")
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const logout = () => {
        localStorage.removeItem("@KenzieHub:token")
        localStorage.removeItem("@KenzieHub:user")
        localStorage.clear()

        setData({} as DataProps)
        history.push("/")
    }

    
    return (
        <AuthContext.Provider value={{createRegister, login, token: data.token, user: data.user, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)