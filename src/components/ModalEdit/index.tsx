import {Container, ShowOnlyContainer, Header, Main, Select, Actions, SaveButton, DeleteButton} from "./style"
import Input from "../Input/index"

import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"

import {useAuth} from "../../providers/AuthContext/index"
 
interface Schema {
    title: string
    status: string
}


const ModalEdit = () => {

    const {closeEditState, actualEditTech, deleteTech, token, user, updateTech} = useAuth()

    const schema = yup.object().shape({
        title: yup.string().optional(),
        status: yup.string().optional()
    })

    const {register, handleSubmit, formState: {errors}} = useForm<Schema>({
        resolver: yupResolver(schema)
    })

    const handleClick = (data: Schema) => {
        updateTech(actualEditTech, token, data, user)
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
                                options.map((option) => (
                                    <option>{option}</option>
                                ))
                            }
                        </Select>
                        <Actions>
                            <SaveButton type="submit">Salvar Alterações</SaveButton>
                            <DeleteButton type="button" onClick={() => deleteTech(actualEditTech, token, user)}>Excluir</DeleteButton>
                        </Actions>
                    </form>
                </Main>
            </Container>
            <ShowOnlyContainer onClick={() => closeEditState()}/>
        </>
    )
}

export default ModalEdit