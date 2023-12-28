import {Container, Header, Main, Select, ShowOnlyContainer} from "./style"
import Input from "../Input/index"

import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"

import {createTechSchema} from "../../schemas/tech.schema"
import {TCreateTech} from "../../types/tech.type"

import {useTech} from "../../providers/TechContext/index"


const ModalAdd = () => {

    const {addTech, closeModalState} = useTech()

    const {register, handleSubmit, formState: {errors}} = useForm<TCreateTech>({
        resolver: yupResolver(createTechSchema)
    })

    const submit = (data: TCreateTech) => {
        addTech(data)
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