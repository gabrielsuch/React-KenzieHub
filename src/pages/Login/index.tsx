import {Container, Header, Box} from "./style"

import {Input} from "../../components/Input/index"

import {useHistory} from "react-router-dom"

import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"

import {loginSchema} from "../../schemas/user.schema"
import {TLogin} from "../../types/user.type"

import {useUserContext} from "../../providers/UserContext/index"


export const Login = () => {

    const {login} = useUserContext()

    const history = useHistory()

    const {register, handleSubmit, formState: {errors}} = useForm<TLogin>({
        resolver: yupResolver(loginSchema)
    })

    const onSubmit = async (data: TLogin) => {
        await login(data)
    }

    return (
        <Container>
            <Header>
                <div id="headerTitle">
                    <h1>Kenzie Hub</h1>
                </div>
            </Header>
            <Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div id="title">
                        <h1>Login</h1>
                    </div>
                    <Input id="email" label="Email" type="text" placeholder="Email" register={register} error={errors.email}/>
                    <Input id="password" label="Senha" type="password" placeholder="Senha" register={register} error={errors.password}/>
                    <div id="containerButton">
                        <button type="submit">Entrar</button>
                    </div>
                    <div id="containerMessage">
                        <h3>Ainda não possui uma conta?</h3>
                    </div>
                </form>
                <div id="containerRegister">
                    <button type="button" onClick={() => history.push("/signup")}>Cadastrar</button>
                </div>
            </Box>
        </Container>
    )
}