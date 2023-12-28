import React, {createContext, useContext, ReactNode, useState} from "react"


interface ChildrenProps {
    children: ReactNode
}

export type Modal = "AddTech" | "EditTech" | "None"

interface ContextData {
    modalOpen: Modal
    setModalOpen: React.Dispatch<React.SetStateAction<Modal>>
}


const DashboardContext = createContext({} as ContextData)

export const DashboardContextProvider = ({children}: ChildrenProps) => {

    const [modalOpen, setModalOpen] = useState<Modal>("None")

    return (
        <DashboardContext.Provider value={{modalOpen, setModalOpen}}>
            {children}
        </DashboardContext.Provider>
    )
}

export const useDashboardContext = () => useContext(DashboardContext)