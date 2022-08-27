import {Container, Header, Box, Register, Form, Title, RegisterButton, Modules, Select, ErrorMessage} from "./style"

import Input from "../../components/Input/index"

import {useAuth} from "../../providers/AuthContext/index"

import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"

import {useHistory} from "react-router-dom"


interface SignupProps {
    name: string
    email: string
    password: string
    confirm_password: string
    course_module: string
    bio: string
    contact: string
}

const Signup = () => {

    const history = useHistory()

    const {createRegister} = useAuth()

    const modules = ["Primeiro Módulo", "Segundo Módulo", "Terceiro Módulo", "Quarto Módulo"]

    const schema = yup.object().shape({
        name: yup.string().required("Campo Obrigatório"),
        email: yup.string().required("Campo Obrigatório").email("Email Inválido"),
        password: yup.string().required("Campo Obrigatório"),
        confirm_password: yup.string().required("Campo Obrigatório").oneOf([yup.ref("password")], "Senhas Diferentes"),
        course_module: yup.string().required("Campo Obrigatório"),
        bio: yup.string().required("Campo Obrigatório"),
        contact: yup.string().required("Campo Obrigatório")
    })

    const {register, handleSubmit, formState: {errors}} = useForm<SignupProps>({
        resolver: yupResolver(schema)
    })
    
    const submit = (data: SignupProps) => {
        createRegister(data)
    }

    return (
        <Container>
            <Header>
                <div className="headerTitle">
                    <h1>Kenzie Hub</h1>
                </div>
                <div className="backButton" onClick={() => history.push("/")}>
                    <button>Voltar</button>
                </div>
            </Header>
            <Box>
                <Register>
                    <Form onSubmit={handleSubmit(submit)}>
                        <Title>
                            <h1>Crie sua Conta</h1>
                        </Title>
                        <Title>
                            <h2>Rápido e Grátis, vamos nessa</h2>
                        </Title>
                        <Input name="name" label="Nome" type="text" placeholder="Digite aqui seu nome" register={register} error={errors.name}/>
                        <Input name="email" label="Email" type="text" placeholder="Digite aqui seu email" register={register} error={errors.email}/>
                        <Input name="password" label="Senha" type="password" placeholder="Digite aqui sua senha" register={register} error={errors.password}/>
                        <Input name="confirm_password" label="Confirmar Senha" type="password" placeholder="Digite novamente sua senha" register={register} error={errors.confirm_password}/>
                        <Input name="bio" label="Bio" type="text" placeholder="Fale sobre você" register={register} error={errors.bio}/>
                        <Input name="contact" label="Contato" type="text" placeholder="Opção de Contato" register={register} error={errors.contact}/>

                        <Modules>
                            <Select {...register("course_module")}>
                            {
                                modules.map((module, index) => {
                                    return <option key={index}>{module}</option>
                                })
                            }
                            </Select>
                        </Modules>
                        <ErrorMessage>{errors.course_module?.message}</ErrorMessage>
                        <RegisterButton type="submit">
                            <h2>Cadastrar</h2>
                        </RegisterButton>
                    </Form>
                </Register>
            </Box>
        </Container>
    )
}

export default Signup