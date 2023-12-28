import {Container, Header, Box, Form, Register, Title, LoginButton, CreateAccount, RegisterButton} from "./style"

import Input from "../../components/Input/index"

import {useHistory} from "react-router-dom"

import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"

import {loginSchema} from "../../schemas/user.schema"
import {TLogin} from "../../types/user.type"

import {useAuth} from "../../providers/AuthContext/index"


const Login = () => {

    const {login} = useAuth()

    const history = useHistory()

    const {register, handleSubmit, formState: {errors}} = useForm<TLogin>({
        resolver: yupResolver(loginSchema)
    })

    const submit = (data: TLogin) => {
        login(data)
    }

    return (
        <Container>
            <Header>
                <div className="headerTitle">
                    <h1>Kenzie Hub</h1>
                </div>
            </Header>
            <Box>
                <Register>
                    <Form onSubmit={handleSubmit(submit)}>
                        <Title>Login</Title>
                        <Input name="email" label="Email" type="text" placeholder="Email" register={register} error={errors.email}/>
                        <Input name="password" label="Senha" type="password" placeholder="Senha" register={register} error={errors.password}/>
                        <LoginButton type="submit">
                            <h2>Entrar</h2>
                        </LoginButton>
                        <CreateAccount>
                            <h3>Ainda não possui uma conta?</h3>
                        </CreateAccount>
                    </Form>
                    <RegisterButton onClick={() => history.push("/signup")}>
                        <h2>Cadastrar</h2>
                    </RegisterButton>
                </Register>
            </Box>
        </Container>
    )
}

export default Login