import {createContext, useContext, ReactNode, useState} from "react"

import {api} from "../../services/api"

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
    difficultyOptions: readonly string[]
    openEditState: (tech: Tech) => void
    openModalState: () => void
    closeModalState: () => void
    closeEditState: () => void
    getTechs: () => Promise<void>
    createTech: (data: TCreateTech) => Promise<void>
    updateTech: (id: string, data: TUpdateTech) => Promise<void>
    deleteTech: (id: string) => Promise<void>
    
}


const TechContext = createContext<ContextData>({} as ContextData)

export const TechProvider = ({children}: ChildrenProps) => {

    const {token, user} = useAuth()

    const [techs, setTechs] = useState<Tech[]>([])
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [openEdit, setOpenEdit] = useState<boolean>(false)

    const [actualEditTech, setActualEditTech] = useState({} as Tech)

    const difficultyOptions: readonly string[] = ["Iniciante", "Intermediário", "Avançado"]


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

    const getTechs = async (): Promise<void> => {
        try {
            const response = await api.get(`/users/${user.id}`)

            setTechs(response.data.techs)

        } catch(err) {
            console.error(err)
        }
    }

    const createTech = async (data: TCreateTech): Promise<void> => {
        try {
            const response = await api.post("/users/techs", data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            toast.success("Tecnologia Criada!")

            // MUDAR ESSA LOGICA ABAIXO \/
            getTechs()
            closeModalState()
            
        } catch(err) {
            console.error(err)
            toast.error("Erro na Criação. Possivelmente esta Tecnologia já existe.")
        }
    }

    const updateTech = async (id: string, data: TUpdateTech): Promise<void> => {
        try {
            const response = await api.put(`/users/techs/${id}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            getTechs()
            closeEditState()

        } catch(err) {
            console.error(err)
        }
    }

    const deleteTech = async (id: string): Promise<void> => {
        try {
            await api.delete(`/users/techs/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            getTechs()
            closeEditState()

        } catch(err) {
            console.error(err)
        }
    }

    return (
        <TechContext.Provider value={{actualEditTech, openModal, openEdit, techs, difficultyOptions, openEditState, openModalState, closeModalState, closeEditState,  getTechs, createTech, updateTech, deleteTech}}>
            {children}
        </TechContext.Provider>
    )
}

export const useTech = () => useContext(TechContext)