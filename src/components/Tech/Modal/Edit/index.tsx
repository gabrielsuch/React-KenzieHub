import {Container, ShowOnlyContainer, Header, Main, Select, Actions, SaveButton, DeleteButton} from "./style"

import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"

import {updateTechSchema} from "../../../../schemas/tech.schema"
import {TUpdateTech} from "../../../../types/tech.type"

import {useDashboardContext} from "../../../../providers/DashboardContext/index"
import {useTech} from "../../../../providers/TechContext/index"


export const ModalEditTech = () => {
    
    const {setModalOpen} = useDashboardContext()
    const {difficultyOptions, deleteTech, updateTech, selectedTech} = useTech()

    const {register, handleSubmit} = useForm<TUpdateTech>({
        resolver: yupResolver(updateTechSchema)
    })

    const onSubmit = async (data: TUpdateTech) => {
        await updateTech(selectedTech.id, data)
    }

    return (
        <>
            <Container>
                <Header>
                    <h2>Tecnologia Detalhes</h2>
                    <button onClick={() => setModalOpen("None")}>X</button>
                </Header>
                <Main>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Select {...register("status")}>
                            {
                                difficultyOptions.map((option, index) => (
                                    <option key={index}>{option}</option>
                                ))
                            }
                        </Select>
                        <Actions>
                            <SaveButton type="submit">Salvar Alterações</SaveButton>
                            <DeleteButton type="button" onClick={async() => await deleteTech(selectedTech.id)}>Excluir</DeleteButton>
                        </Actions>
                    </form>
                </Main>
            </Container>
            <ShowOnlyContainer onClick={() => setModalOpen("None")}/>
        </>
    )
}