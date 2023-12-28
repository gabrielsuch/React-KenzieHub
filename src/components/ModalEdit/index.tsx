import {Container, ShowOnlyContainer, Header, Main, Select, Actions, SaveButton, DeleteButton} from "./style"

import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"

import {updateTechSchema} from "../../schemas/tech.schema"
import {TUpdateTech} from "../../types/tech.type"

import {useTech} from "../../providers/TechContext/index"


const ModalEdit = () => {
    
    const {deleteTech, updateTech, closeEditState, actualEditTech} = useTech()

    const {register, handleSubmit} = useForm<TUpdateTech>({
        resolver: yupResolver(updateTechSchema)
    })

    const handleClick = (data: TUpdateTech) => {
        updateTech(actualEditTech, data)
    }

    const options = ["Iniciante", "Intermediário", "Avançado"]

    return (
        <>
            <Container>
                <Header>
                    <h2>Tecnologia Detalhes</h2>
                    <button onClick={() => closeEditState()}>X</button>
                </Header>
                <Main>
                    <form onSubmit={handleSubmit(handleClick)}>
                        <Select {...register("status")}>
                            {
                                options.map((option, index) => (
                                    <option key={index}>{option}</option>
                                ))
                            }
                        </Select>
                        <Actions>
                            <SaveButton type="submit">Salvar Alterações</SaveButton>
                            <DeleteButton type="button" onClick={() => deleteTech(actualEditTech)}>Excluir</DeleteButton>
                        </Actions>
                    </form>
                </Main>
            </Container>
            <ShowOnlyContainer onClick={() => closeEditState()}/>
        </>
    )
}

export default ModalEdit