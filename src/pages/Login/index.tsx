import {Container, Box, Form, Register, Title, LoginButton, CreateAccount, RegisterButton} from "./style"

import Input from "../../components/Input/index"

import {useHistory} from "react-router-dom"

import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"

import {useAuth} from "../../providers/AuthContext/index"

interface LoginProps {
    email: string
    password: string
}

const Login = () => {

    const {login} = useAuth()

    const history = useHistory()

    const schema = yup.object().shape({
        email: yup.string().required("Campo Obrigatório").email("Email Inválido"),
        password: yup.string().required("Campo Obrigatório")
    })

    const {register, handleSubmit, formState: {errors}} = useForm<LoginProps>({
        resolver: yupResolver(schema)
    })

    const submit = (data: LoginProps) => {
        login(data)
    }

    return (
        <Container>
            <Box>
                <Register>
                    <Form onSubmit={handleSubmit(submit)}>
                        <Title>Login</Title>
                        <Input name="email" label="Email" type="text" placeholder="Email" register={register} error={errors.email}/>
                        <Input name="password" label="Password" type="password" placeholder="Password" register={register} error={errors.password}/>
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