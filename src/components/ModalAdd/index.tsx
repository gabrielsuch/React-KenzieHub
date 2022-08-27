import {Container, Header, Main, Select, ShowOnlyContainer} from "./style"
import Input from "../Input/index"

import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"

import {useAuth} from "../../providers/AuthContext/index"

interface DataProps {
    id: string
    title: string
    status: string
    created_at: string
    updated_at: string
}

const ModalAdd = () => {

    const {addTech, closeModalState, user, token} = useAuth()

    const schema = yup.object().shape({
        title: yup.string().required("Campo Obrigatório"),
        status: yup.string().required("Campo Obrigatório")
    })

    const {register, handleSubmit, formState: {errors}} = useForm<DataProps>({
        resolver: yupResolver(schema)
    })

    const submit = (data: DataProps) => {
        addTech(data, user, token)
    }

    const options = ["Iniciante", "Intermediário", "Avançado"]

    return (
        <>
            <Container>
                    <Header>
                        <h1>Cadastrar Tecnologia</h1>
                        <button onClick={() => closeModalState()}>X</button>
                    </Header>
                    <Main>
                        <form onSubmit={handleSubmit(submit)}>
                            <Input type="text" name="title" placeholder="Nome" label="Nome" register={register} error={errors.title}/>
                            <Select {...register("status")}>
                                {
                                    options.map((option, index) => (
                                        <option key={index}>{option}</option>
                                        ))
                                    }
                            </Select>
                            <button type="submit">Cadastrar Tecnologia</button>
                        </form>
                    </Main>
            </Container>
            <ShowOnlyContainer onClick={() => closeModalState()}/>
        </>
    )
}

export default ModalAdd