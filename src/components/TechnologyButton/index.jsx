import {ContainerCard, Header, CloseButton, Input, Levels, Label, Form} from "./style"
import {Button, ErrorMessage} from "../../pages/SignUp/style"

import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import { toast } from "react-toastify"

const TechnologyButton = ({tech, setTech, techs, setTechs}) => {

    const schema = yup.object().shape({
        tech: yup.string().required("Campo Obrigatório"),
        level: yup.string().required("Campo Obrigatório").nullable(),
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitFunction = (data) => {
        setTechs([...techs, data])
        toast.success("Tecnologia Criada com Sucesso!")
    }

    const hideTech = () => {
        setTech(false)
    }

    return (
        <>
            <ContainerCard>
                <Header>
                    <h2>Cadastrar Tecnologia</h2>
                    <CloseButton onClick={() => hideTech()}>X</CloseButton>
                </Header>
                <Form onSubmit={handleSubmit(onSubmitFunction)}>
                    <Input placeholder="Nome da Tech" {...register("tech")}/>
                    <ErrorMessage>{errors.tech?.message}</ErrorMessage>
                    <p>Selecionar Status: </p>
                    <Levels>
                        <input type="radio" name="level" id="iniciante" value="Iniciante" {...register("level")}/>
                        <Label htmlFor="level" title="Iniciante"><span>Iniciante</span></Label>
                        <input type="radio" name="level" id="intermediario" value="Intermediário" {...register("level")}/>
                        <Label htmlFor="level" title="Intermediário"><span>Intermediário</span></Label>
                        <input type="radio" name="level" id="avançado" value="Avançado" {...register("level")}/>
                        <Label htmlFor="level" title="Avançado"><span>Avançado</span></Label>
                    </Levels>
                    <ErrorMessage>{errors.level?.message}</ErrorMessage>
                    <Button type="submit">Enviar</Button>
                </Form>
            </ContainerCard>
        </>
    )
}

export default TechnologyButton