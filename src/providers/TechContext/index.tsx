import {createContext, useContext, ReactNode, useState} from "react"

import {AxiosResponse} from "axios"
import {api} from "../../services/api"

import {TTech, TCreateTech, TUpdateTech} from "../../types/tech.type"

import {useDashboardContext} from "../DashboardContext/index"
import {useAuth} from "../AuthContext/index"

import {toast} from "react-toastify"


interface ChildrenProps {
    children: ReactNode
}

interface ContextData {
    difficultyOptions: readonly string[]
    selectedTech: TTech
    techs: TTech[]
    getTechs: () => Promise<void>
    createTech: (data: TCreateTech) => Promise<void>
    updateTech: (id: string, data: TUpdateTech) => Promise<void>
    deleteTech: (id: string) => Promise<void>
    setSelectedTech: React.Dispatch<React.SetStateAction<TTech>>
}


const TechContext = createContext<ContextData>({} as ContextData)

export const TechProvider = ({children}: ChildrenProps) => {

    const {setModalOpen} = useDashboardContext()
    const {token, user} = useAuth()

    const [techs, setTechs] = useState<TTech[]>([])

    const [selectedTech, setSelectedTech] = useState({} as TTech)

    const difficultyOptions: readonly string[] = ["Iniciante", "Intermediário", "Avançado"]


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
            const response: AxiosResponse<TTech> = await api.post("/users/techs", data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            setTechs([...techs, response.data])
            setModalOpen("None")

            toast.success("Tecnologia Criada!")

            
        } catch(err) {
            console.error(err)
            toast.error("Erro na Criação. Possivelmente esta Tecnologia já existe.")
        }
    }

    const updateTech = async (id: string, data: TUpdateTech): Promise<void> => {
        try {
            const response: AxiosResponse<Omit<TTech, "user">> = await api.put(`/users/techs/${id}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            const tech = techs.findIndex(currentTech => currentTech.id === id)

            Object.assign(techs[tech], response.data)

            setModalOpen("None")

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

            setTechs(techs.filter(tech => tech.id !== id))

            setModalOpen("None")

        } catch(err) {
            console.error(err)
        }
    }

    return (
        <TechContext.Provider value={{selectedTech, techs, difficultyOptions,  getTechs, createTech, updateTech, deleteTech, setSelectedTech}}>
            {children}
        </TechContext.Provider>
    )
}

export const useTech = () => useContext(TechContext)