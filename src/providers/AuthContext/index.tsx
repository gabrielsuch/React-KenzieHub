import {createContext, useContext, ReactNode, useState} from "react"
import {useHistory} from "react-router-dom"

import {api} from "../../services/api"

import {TCreateUser, TLogin} from "../../types/user.type"

import {toast} from "react-toastify"

interface ChildrenProps {
    children: ReactNode
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
    token: string
    user: UserProps
    createRegister: (data: TCreateUser) => Promise<void>
    login: (data: TLogin) => Promise<void>
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

    const createRegister = async (data: TCreateUser): Promise<void> => {
        const {confirm_password, ...newData} = data

        try {
            await api.post("/users", newData)

            toast.success("Conta Criada com Sucesso!")

            history.push("/")

        } catch(_) {
            toast.error("Erro na Criação da Conta")
        }
    }

    const login = async (data: TLogin): Promise<void> => {
        try {
            const response = await api.post("/sessions", data)

            const token = response.data.token
            const user = response.data.user

            localStorage.setItem("@KenzieHub:token", token)
            localStorage.setItem("@KenzieHub:user", JSON.stringify(user))
            
            setData({token, user})
            history.push("/dashboard")
            toast.success(`Seja Bem-vindo, ${user.name}`)

        } catch(_) {
            toast.error("Erro no Login")
        }
    }

    const logout = (): void => {
        localStorage.removeItem("@KenzieHub:token")
        localStorage.removeItem("@KenzieHub:user")
        localStorage.clear()

        setData({} as DataProps)
        history.push("/")
    }

    
    return (
        <AuthContext.Provider value={{token: data.token, user: data.user, createRegister, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)