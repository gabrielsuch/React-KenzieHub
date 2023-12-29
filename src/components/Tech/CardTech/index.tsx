import React from "react"

import {Container} from "./style"

import {TTech} from "../../../types/tech.type"

import {Modal} from "../../../providers/DashboardContext/index"


interface TechProps {
    tech: TTech
    setSelectedTech: React.Dispatch<React.SetStateAction<TTech>>
    setModalOpen: React.Dispatch<React.SetStateAction<Modal>>
}

export const CardTech = ({tech, setSelectedTech, setModalOpen}: TechProps) => {
    return (
        <Container onClick={() => {
            setSelectedTech(tech)
            setModalOpen("EditTech")
        }}>
            <div className="title">
                <h1>{tech.title}</h1>
            </div>
            <div className="status">
                <h3>{tech.status}</h3>
            </div>
        </Container>
    )
}