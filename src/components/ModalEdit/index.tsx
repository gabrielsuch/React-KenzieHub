import {Container, ShowOnlyContainer, Header, Main, Select, Actions, SaveButton, DeleteButton} from "./style"
import Input from "../Input/index"

import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"

import {useTech} from "../../providers/TechContext/index"

 
interface Schema {
    title: string
    status: string
}


const ModalEdit = () => {
    
    const {deleteTech, updateTech, closeEditState, actualEditTech} = useTech()

    const schema = yup.object().shape({
        title: yup.string().optional(),
        status: yup.string().optional()
    })

    const {register, handleSubmit} = useForm<Schema>({
        resolver: yupResolver(schema)
    })

    const handleClick = (data: Schema) => {
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
                        <Input name="title" type="text" label="Nome do Projeto" register={register}/>
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