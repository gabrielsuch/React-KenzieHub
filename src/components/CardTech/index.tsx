import {OptionBox, Title, Difficulty} from "./style"

import {useTech} from "../../providers/TechContext/index"

interface Props {
    id: string
    title: string
    status: string
    created_at: string
    updated_at: string
}

interface TechProps {
    tech: Props
}

const CardTech = ({tech}: TechProps) => {

    const {openEditState} = useTech()

    return (
        <>
            <OptionBox onClick={() => openEditState(tech)}>
                <Title>{tech.title}</Title>
                <Difficulty>{tech.status}</Difficulty>
            </OptionBox>
        </>
    )
}

export default CardTech