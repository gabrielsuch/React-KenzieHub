import {createContext, useContext, ReactNode, useState} from "react"

import api from "../../services/api"

import {TCreateTech, TUpdateTech} from "../../types/tech.type"

import {useAuth} from "../AuthContext/index"

import {toast} from "react-toastify"


interface ChildrenProps {
    children: ReactNode
}

interface Tech {
    id: string
    title: string
    status: string
    created_at: string
    updated_at: string
}

interface ContextData {
    actualEditTech: Tech
    openModal: boolean
    openEdit: boolean
    techs: Tech[]
    openEditState: (tech: Tech) => void
    openModalState: () => void
    closeModalState: () => void
    closeEditState: () => void
    addTech: (data: TCreateTech) => void
    getTechs: () => void
    deleteTech: (tech: Tech) => void
    updateTech: (tech: Tech, data: TUpdateTech) => void
    
}


const TechContext = createContext<ContextData>({} as ContextData)

export const TechProvider = ({children}: ChildrenProps) => {

    const {token, user} = useAuth()

    const [techs, setTechs] = useState<Tech[]>([] as Tech[])
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [openEdit, setOpenEdit] = useState<boolean>(false)

    const [actualEditTech, setActualEditTech] = useState<Tech>({} as Tech)

    const closeModalState = () => {
        setOpenModal(false)
    }

    const openModalState = () => {
        setOpenModal(true)
    }

    const closeEditState = () => {
        setOpenEdit(false)
    }

    const openEditState = (tech: Tech) => {
        setOpenEdit(true)
        setActualEditTech(tech)
    }

    const getTechs = () => {
        api.get(`/users/${user.id}`)
        .then((response) => {
            setTechs(response.data.techs)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const addTech = (data: TCreateTech) => {
        api.post("/users/techs/", data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((_) => {
            toast.success("Tecnologia Criada!")

            getTechs()
            closeModalState()
        })
        .catch((err) => {
            toast.error("Erro na Criação. Possivelmente esta Tecnologia já existe.")
            console.log(err)
        })
    }

    const updateTech = (tech: Tech, data: TUpdateTech) => {
        api.put(`/users/techs/${tech.id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((_) => {
            getTechs()
            closeEditState()
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const deleteTech = (tech: Tech) => {
        api.delete(`/users/techs/${tech.id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((_) => {
            getTechs()
            closeEditState()
        })
        .catch((err) => {
            console.log(err)
        })
    }


    return (
        <TechContext.Provider value={{actualEditTech, openModal, openEdit, techs, openEditState, openModalState, closeModalState, closeEditState, addTech, getTechs, deleteTech, updateTech}}>
            {children}
        </TechContext.Provider>
    )
}

export const useTech = () => useContext(TechContext)