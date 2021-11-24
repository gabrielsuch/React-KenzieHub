import {ContainerCard, Header, CloseButton, Input, ShowOnlyContainer} from "../TechnologyButton/style"
import {Button, ErrorMessage} from "../../pages/SignUp/style"
import {TextArea} from "./style"

import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import { toast } from "react-toastify"
import api from "../../services/index"

const WorkButton = ({setWork, works, setWorks}) => {

    const schema = yup.object().shape({
        title: yup.string().required("Campo Obrigatório"),
        description: yup.string().required("Campo Obrigatório"),
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitFunction = (data) => {
        const token = localStorage.getItem("@KenzieHub:token")

        api.post("/users/works", {...data, deploy_url: "https://kenziehub.me"}, {
            headers: { 
                Authorization: `Bearer ${token}` 
            },
        }).then(response => {
            setWorks([...works, response.data])
            toast.success("Trabalho Criado com Sucesso!")
        })
        .catch(err => {
            console.log(err)
            toast.error("Algum problema ocorreu, e sua tarefa não foi adicionada!")
        })
    }

    const hideWork = () => {
        setWork(false)
    }

    return (
        <>
            <ContainerCard>
                <Header>
                    <h2>Cadastrar Trabalho</h2>
                    <CloseButton onClick={() => hideWork()}>X</CloseButton>
                </Header>
                <form onSubmit={handleSubmit(onSubmitFunction)}>
                    <Input placeholder="Nome do Trabalho" {...register("title")}/>
                    <ErrorMessage>{errors.work?.message}</ErrorMessage>
                    <TextArea placeholder="Descrição do Trabalho" rows="8" {...register("description")}/>   
                    <ErrorMessage>{errors.description?.message}</ErrorMessage>          
                    <Button type="submit">Enviar</Button>
                </form>
            </ContainerCard>
            <ShowOnlyContainer onClick={() => hideWork()}/>
        </>
    )
}

export default WorkButton