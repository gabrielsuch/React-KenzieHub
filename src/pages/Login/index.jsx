import {Description, RegisterButton} from "./style"
import {Middle, KenzieHub, Box, Form, Input, Button, ErrorMessage} from "../SignUp/style"

import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import {useHistory, Redirect} from "react-router-dom"
import api from "../../services/index"
import { toast } from "react-toastify"

const Login = ({setAuth, setData}) => {

    const token = localStorage.getItem("@KenzieHub:token") || ""

    const history = useHistory()

    const schema = yup.object().shape({
        email: yup.string().required("Campo Obrigatório").email("Email Inválido"),
        password: yup.string().required("Campo Obrigatório").min(8, "Mínimo 8 dígitos"),
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitFunction = (data) => {
        api.post("/sessions", data)
        .then(response => {
            localStorage.setItem("@KenzieHub:token", response.data.token)
            localStorage.setItem("@KenzieHub:id", response.data.user.id)
            setAuth(true)
            setData(response.data.user)
            toast.success("Login Feito!")
            history.push("/dashboard")
        })
        .catch(err => {
            toast.error("Erro no Login")
        })
    }

    if(token){
        return <Redirect to="/dashboard"/>
    }

    return (
        <Middle>
            <KenzieHub>
                <p>Kenzie <span>Hub</span></p>
            </KenzieHub>
            <Box>
                <Form onSubmit={handleSubmit(onSubmitFunction)}>
                    <Input placeholder="Email" {...register("email")}/>
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>
                    <Input type="password" placeholder="Senha" {...register("password")}/>
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>
                    <Button type="submit">Logar</Button>
                    <Description>
                        <p>Criar uma página para mostrar suas <span>habilidades, metas e progresso</span></p>
                    </Description>
                </Form>
                <RegisterButton onClick={() => history.push("./")}>
                    Cadastrar
                </RegisterButton>
            </Box>
        </Middle>
    )
}

export default Login