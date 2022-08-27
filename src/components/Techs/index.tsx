import {OptionBox, Title, Difficulty} from "./style"

import {useAuth} from "../../providers/AuthContext/index"

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

const Techs = ({tech}: TechProps) => {

    const {openEditState} = useAuth()
    return (
        <>
            <OptionBox onClick={() => openEditState(tech)}>
                <Title>{tech.title}</Title>
                <Difficulty>{tech.status}</Difficulty>
            </OptionBox>
        </>
    )
}

export default Techs