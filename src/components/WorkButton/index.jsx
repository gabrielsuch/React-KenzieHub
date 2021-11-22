import {ContainerCard, Header, CloseButton, Input} from "../TechnologyButton/style"
import {Button, ErrorMessage} from "../../pages/SignUp/style"
import {TextArea} from "./style"

import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import { toast } from "react-toastify"

const WorkButton = ({setWork, works, setWorks}) => {

    const schema = yup.object().shape({
        work: yup.string().required("Campo Obrigatório"),
        description: yup.string().required("Campo Obrigatório"),
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitFunction = (data) => {
        console.log(data)
        setWorks([...works, data])
        toast.success("Trabalho Criado com Sucesso!")
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
                    <Input placeholder="Nome do Trabalho" {...register("work")}/>
                    <ErrorMessage>{errors.work?.message}</ErrorMessage>
                    <TextArea placeholder="Descrição do Trabalho" rows="8" {...register("description")}/>   
                    <ErrorMessage>{errors.description?.message}</ErrorMessage>          
                    <Button type="submit">Enviar</Button>
                </form>
            </ContainerCard>
        </>
    )
}

export default WorkButton