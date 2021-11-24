import {ContainerCard, Header, CloseButton, Input, Levels, Label, Form, ShowOnlyContainer} from "./style"
import {Button, ErrorMessage} from "../../pages/SignUp/style"

import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import { toast } from "react-toastify"
import api from "../../services/index"

const TechnologyButton = ({setTech, techs, setTechs}) => {

    const schema = yup.object().shape({
        title: yup.string().required("Campo Obrigatório"),
        status: yup.string().required("Campo Obrigatório").nullable(),
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitFunction = (data) => {
        const token = localStorage.getItem("@KenzieHub:token")

        api.post("/users/techs", data, {
            headers: { 
                Authorization: `Bearer ${token}` 
            },
        }).then(response => {
            setTechs([...techs, response.data])
            toast.success("Tecnologia Criada com Sucesso!")
        })
        .catch(err => {
            console.log(err)
            toast.error("Algum problema ocorreu, e sua tarefa não foi adicionada!")
        })
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
                    <Input placeholder="Nome da Tech" {...register("title")}/>
                    <ErrorMessage>{errors.title?.message}</ErrorMessage>
                    <p>Selecionar Status: </p>
                    <Levels>
                        <input type="radio" name="level" id="iniciante" value="Iniciante" {...register("status")}/>
                        <Label htmlFor="level" title="Iniciante"><span>Iniciante</span></Label>
                        <input type="radio" name="level" id="intermediario" value="Intermediário" {...register("status")}/>
                        <Label htmlFor="level" title="Intermediário"><span>Intermediário</span></Label>
                        <input type="radio" name="level" id="avançado" value="Avançado" {...register("status")}/>
                        <Label htmlFor="level" title="Avançado"><span>Avançado</span></Label>
                    </Levels>
                    <ErrorMessage>{errors.title?.message}</ErrorMessage>
                    <Button type="submit">Enviar</Button>
                </Form>
            </ContainerCard>
            <ShowOnlyContainer onClick={() => hideTech()}/>
        </>
    )
}

export default TechnologyButton