import {Container, ShowOnlyContainer, Header, Main, Select, Actions, SaveButton, DeleteButton} from "./style"

import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"

import {updateTechSchema} from "../../schemas/tech.schema"
import {TUpdateTech} from "../../types/tech.type"

import {useTech} from "../../providers/TechContext/index"


const ModalEdit = () => {
    
    const {difficultyOptions, deleteTech, updateTech, closeEditState, actualEditTech} = useTech()

    const {register, handleSubmit} = useForm<TUpdateTech>({
        resolver: yupResolver(updateTechSchema)
    })

    const handleClick = async (data: TUpdateTech) => {
        await updateTech(actualEditTech.id, data)
    }

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
                                difficultyOptions.map((option, index) => (
                                    <option key={index}>{option}</option>
                                ))
                            }
                        </Select>
                        <Actions>
                            <SaveButton type="submit">Salvar Alterações</SaveButton>
                            <DeleteButton type="button" onClick={() => deleteTech(actualEditTech.id)}>Excluir</DeleteButton>
                        </Actions>
                    </form>
                </Main>
            </Container>
            <ShowOnlyContainer onClick={() => closeEditState()}/>
        </>
    )
}

export default ModalEdit