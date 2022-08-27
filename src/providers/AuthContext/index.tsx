import {createContext, useContext, ReactNode, useState, useEffect} from "react"
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

interface AddTech {
    id: string
    title: string
    status: string
    created_at: string
    updated_at: string
}

interface PropsTitleStatus{
    title: string
    status: string
}

interface Functions {
    createRegister: (data: RegisterProps) => void
    login: (data: LoginProps) => void
    token: string
    user: UserProps
    addTech: (data: AddTech, user: UserProps, token: string) => void
    getTechs: (id: string) => void
    techs: AddTech[]
    closeModalState: () => void
    openModalState: () => void
    openModal: boolean
    openEdit: boolean
    closeEditState: () => void
    openEditState: (tech: AddTech) => void
    logout: () => void
    actualEditTech: AddTech
    deleteTech: (tech: AddTech, token: string, user: UserProps) => void
    updateTech: (tech: AddTech, token: string, data: PropsTitleStatus, user: UserProps) => void
}

const AuthContext = createContext<Functions>({} as Functions)

export const AuthProvider = ({children}: ChildrenProps) => {
    
    const history = useHistory()
    
    const [techs, setTechs] = useState<AddTech[]>([])
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [openEdit, setOpenEdit] = useState<boolean>(false)

    const [actualEditTech, setActualEditTech] = useState<AddTech>({} as AddTech)

    const closeModalState = () => {
        setOpenModal(false)
    }

    const openModalState = () => {
        setOpenModal(true)
    }

    const closeEditState = () => {
        setOpenEdit(false)
    }

    const openEditState = (tech: AddTech) => {
        setOpenEdit(true)
        setActualEditTech(tech)
    }

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
        const newData = {
            name: data.name,
            email: data.email,
            password: data.password,
            course_module: data.course_module,
            bio: data.bio,
            contact: data.contact
        }
        
        api.post("/users", newData)
        .then((response) => {
            console.log(response)
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
        history.push("/")
    }

    const addTech = (data: AddTech, user: UserProps, token: string) => {
        api.post("/users/techs/", data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((response) => {
            setTechs([...techs, response.data])
            closeModalState()
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const getTechs = (id: string) => {
        api.get(`/users/${id}`)
        .then((response) => {
            setTechs(response.data.techs)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const deleteTech = (tech: AddTech, token: string, user: UserProps) => {
        api.delete(`/users/techs/${tech.id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((response) => {
            closeEditState()
            getTechs(user.id)
            // setTechs(techs.filter((newTech) => {
            //     return tech.id != newTech.id
            // }))
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const updateTech = (tech: AddTech, token: string, data: PropsTitleStatus, user: UserProps) => {
        console.log(tech)
        console.log(data)

        api.put(`/users/techs/${tech.id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((response) => {
            console.log(response)
            getTechs(user.id)
        })
        .catch((err) => {
            console.log(err)
        })
    }


    return (
        <AuthContext.Provider value={{createRegister, login, token: data.token, user: data.user, addTech, techs, getTechs, closeModalState, openModalState, openModal, logout, openEdit, closeEditState, openEditState, actualEditTech, deleteTech, updateTech}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)