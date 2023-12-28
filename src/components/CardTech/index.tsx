import React from "react"

import {OptionBox, Title, Difficulty} from "./style"

import {TTech} from "../../types/tech.type"

import {Modal} from "../../providers/DashboardContext/index"


interface TechProps {
    tech: TTech
    setSelectedTech: React.Dispatch<React.SetStateAction<TTech>>
    setModalOpen: React.Dispatch<React.SetStateAction<Modal>>
}

const CardTech = ({tech, setSelectedTech, setModalOpen}: TechProps) => {

    return (
        <>
            <OptionBox onClick={() => {
                setSelectedTech(tech)
                setModalOpen("EditTech")
            }}>
                <Title>{tech.title}</Title>
                <Difficulty>{tech.status}</Difficulty>
            </OptionBox>
        </>
    )
}

export default CardTech